// controllers/newuser.controller.js
const User = require("../models/user");
const Plan = require("../models/plans");
const Nas = require("../models/nas");
const { Op } = require("sequelize");

// Create new user
const createUser = async (req, res) => {
  try {
    console.log('=== NEW USER CONTROLLER CREATE ===');
    console.log('Request body:', JSON.stringify(req.body, null, 2));

    const { 
      username, 
      password, 
      zone, 
      discount, 
      selectPlan, 
      planGroup, 
      nasList,
      simultaneousUse,
      ipAddress,
      generateInvoice,
      userType
    } = req.body;

    // Validate required fields
    if (!username || !password || !zone) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: "Username, password and zone are required",
        field: "required_fields",
        details: {
          username: !username ? "Username is required" : null,
          password: !password ? "Password is required" : null,
          zone: !zone ? "Zone is required" : null
        }
      });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      console.log('Validation failed: Username already exists');
      return res.status(400).json({ 
        error: "Username already exists",
        field: "username",
        details: "Please choose a different username"
      });
    }

    // Get plan name if plan_id is provided
    let planName = null;
    if (selectPlan) {
      const plan = await Plan.findByPk(selectPlan);
      if (plan) {
        planName = plan.planName;
      }
    }

    // Create user data object
    const userData = {
      username,
      password,
      zoneName: zone,
      discount: discount || "0",
      plan_id: selectPlan || null,
      planName: planName,
      planGroup: planGroup || null,
      simUse: simultaneousUse || 1,
      portalLogin: true,
      autoInvoice: generateInvoice || false,
      operator_id: 1, // Default operator ID
      status: 1,
      suspend: 0,
      userType: userType === 'User' ? 1 : (userType === 'Mac / Static IP' ? 2 : 3),
      mac: ipAddress || null,
      createdBy: 'system',
    };

    console.log('User data to be created:', JSON.stringify(userData, null, 2));

    const user = await User.create(userData);

    console.log('User created successfully:', user.id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        username: user.username,
        zoneName: user.zoneName,
        planName: user.planName,
        planGroup: user.planGroup
      }
    });

  } catch (err) {
    console.error('=== NEW USER CONTROLLER ERROR ===');
    console.error('Error details:', err);
    console.error('Error message:', err.message);

    // Handle Sequelize validation errors
    if (err.name === 'SequelizeValidationError') {
      const validationErrors = err.errors.map(error => ({
        field: error.path,
        message: error.message,
        value: error.value
      }));
      
      return res.status(400).json({ 
        error: "Validation failed",
        details: validationErrors,
        field: "validation"
      });
    }

    // Handle unique constraint errors
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ 
        error: "Username already exists",
        field: "username",
        details: "Please choose a different username"
      });
    }

    res.status(500).json({ 
      error: "Internal server error",
      message: err.message,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

// Get all plans
const getPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll({
      where: { status: true },
      attributes: ['id', 'planName', 'customerCost', 'planGroup', 'validity'],
      order: [['planName', 'ASC']]
    });
    
    res.json({
      success: true,
      data: plans.map(plan => ({
        id: plan.id,
        name: plan.planName,
        planName: plan.planName,
        cost: plan.customerCost,
        planGroup: plan.planGroup,
        validity: plan.validity
      }))
    });
  } catch (err) {
    console.error('Error fetching plans:', err);
    res.status(500).json({ error: err.message });
  }
};

// Get all NAS
const getNas = async (req, res) => {
  try {
    const nasList = await Nas.findAll({
      attributes: ['id', 'nasName', 'nasIp', 'nasType', 'connection'],
      order: [['nasName', 'ASC']]
    });
    
    res.json({
      success: true,
      data: nasList.map(nas => ({
        id: nas.id,
        name: nas.nasName,
        nasName: nas.nasName,
        ip: nas.nasIp,
        type: nas.nasType,
        connection: nas.connection
      }))
    });
  } catch (err) {
    console.error('Error fetching NAS:', err);
    res.status(500).json({ error: err.message });
  }
};

// Get plan groups (unique values)
const getPlanGroups = async (req, res) => {
  try {
    const groups = await Plan.findAll({
      attributes: ['planGroup'],
      where: { 
        planGroup: { [Op.ne]: null },
        status: true
      },
      group: ['planGroup'],
      order: [['planGroup', 'ASC']]
    });
    
    res.json({
      success: true,
      data: groups.map(group => ({
        id: group.planGroup,
        name: group.planGroup,
        planGroup: group.planGroup
      }))
    });
  } catch (err) {
    console.error('Error fetching plan groups:', err);
    res.status(500).json({ error: err.message });
  }
};

// Get zones (unique values from users table)
// Get distinct zones from users table
const getZones = async (req, res) => {
  try {
    const zones = await User.findAll({
      attributes: [
        [User.sequelize.fn("DISTINCT", User.sequelize.col("zoneName")), "zoneName"],
      ],
      raw: true,
    });

    res.status(200).json({ success: true, data: zones });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * GET All Users
 */
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * GET User by ID
 */
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: user });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * UPDATE User
 */
const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const updatedUser = await User.findByPk(req.params.id);
    res.json({ success: true, message: "User updated successfully", data: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * DELETE User
 */
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  createUser,
  getPlans,
  getNas,
  getPlanGroups,
  getZones,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
