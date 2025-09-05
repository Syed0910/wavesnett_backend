// controllers/userDetails.controller.js
const UserDetails = require("../models/userDetails");

// Get details of a single user by ID
exports.getUserDetailsById = async (req, res) => {
  try {
    const { id } = req.params;

    const userDetails = await UserDetails.findByPk(id);

    if (!userDetails) {
      return res.status(404).json({ message: "User details not found" });
    }

    res.json(userDetails);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get all users details
exports.getAllUserDetails = async (req, res) => {
  try {
    const allUsers = await UserDetails.findAll();
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching all user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
