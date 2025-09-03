// src/controllers/userinfos.controller.js
const db = require("../config/database");

// ✅ Get all userinfos
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM userinfos");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get single userinfo by ID
exports.getUserById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM userinfos WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create new userinfo
exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const [result] = await db.query("INSERT INTO userinfos SET ?", data);
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update userinfos
exports.updateUser = async (req, res) => {
  try {
    const data = req.body;
    const [result] = await db.query("UPDATE userinfos SET ? WHERE id = ?", [data, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


