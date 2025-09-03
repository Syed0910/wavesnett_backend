// controllers/filepermissions.controller.js
const FilePermission = require("../models/filepermissions");

// ✅ Get all file permissions
exports.getAll = async (req, res) => {
  try {
    const permissions = await FilePermission.findAll();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get file permission by ID
exports.getById = async (req, res) => {
  try {
    const permission = await FilePermission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Not found" });
    res.json(permission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create new file permission
exports.create = async (req, res) => {
  try {
    const newPermission = await FilePermission.create(req.body);
    res.status(201).json(newPermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update file permission
exports.update = async (req, res) => {
  try {
    const permission = await FilePermission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Not found" });

    await permission.update(req.body);
    res.json(permission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete file permission
exports.remove = async (req, res) => {
  try {
    const permission = await FilePermission.findByPk(req.params.id);
    if (!permission) return res.status(404).json({ message: "Not found" });

    await permission.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
