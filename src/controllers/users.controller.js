const db = require('../config/database'); // your MySQL connection
const User = require("../models/user"); 
// GET all users with userinfos
exports.getUsers = async (req, res) => {
  try {
    const query = `
      SELECT u.id, u.username, u.planName AS plan, u.startDate AS createdAt, u.expiryDate AS expiry,
             u.bill, u.status,
             ui.email, ui.phone, ui.alternatPhone, ui.contactPerson
      FROM users u
      LEFT JOIN userinfos ui ON u.id = ui.user_id
    `;

    const [rows] = await db.query(query);

    // Transform for frontend
    const formattedUsers = rows.map(user => ({
      id: user.id,
      username: user.username || 'N/A',
      name: user.username || 'N/A',
      plan: user.plan || 'No Plan',
      createdAt: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
      expiry: user.expiry ? new Date(user.expiry).toLocaleDateString() : 'N/A',
      bill: user.bill || '₹0.00',
      status: user.status ? 'Enable' : 'Disable',
      email: user.email || 'N/A',
      phone: user.phone || 'N/A',
      alternatePhone: user.alternatePhone || 'N/A',
      contactPerson: user.contactPerson || 'N/A',
      account: 'Active',
      type: 'User',
      planGroup: ''
    }));

    res.json(formattedUsers);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};



exports.addUser = async (req, res) => {
  try {
    console.log("Received user data:", req.body);

    const {
      username,
      password,
      zone,
      discount,
      selectPlan,
      planGroup,
      simultaneousUse,
      ipAddress,
      generateInvoice,
      userType,
    } = req.body;

    // Validate
    if (!username || !username.trim()) {
      return res.status(400).json({ error: "Username is required" });
    }
    if (!password || !password.trim()) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ where: { username: username.trim() } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Map userType
    let userTypeValue = 1;
    switch (userType) {
      case "User":
        userTypeValue = 1;
        break;
      case "Mac / Static IP":
        userTypeValue = 2;
        break;
      case "Multiple Static IP":
        userTypeValue = 3;
        break;
    }

    // Prepare user data
    const userData = {
      username: username.trim(),
      password,
      zoneName: zone || "admin",
      discount: discount || "0",
      simUse: parseInt(simultaneousUse) || 1,
      userType: userTypeValue,
      portalLogin: true,
      autoInvoice: !!generateInvoice,
      status: false,
      suspend: false,
      operator_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    };

    if (userType === "Mac / Static IP" && ipAddress) {
      userData.mac = ipAddress.trim();
    }

    if (selectPlan) {
      userData.planName = selectPlan.trim();
    }

    if (planGroup) {
      userData.planGroup = planGroup.trim();
    }

    console.log("Prepared user data:", userData);

    // Insert user into DB via Sequelize
    const newUser = await User.create(userData);

    res.status(201).json({
      success: true,
      message: "User added successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        userType,
        zone: newUser.zoneName,
      },
    });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({
      error: "Failed to add user",
      details: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
};
