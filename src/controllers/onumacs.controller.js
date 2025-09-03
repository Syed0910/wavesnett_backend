// controllers/onumacs.controller.js
const OnuMac = require("../models/onumacs");

// Get all ONU MACs
exports.getAll = async (req, res) => {
  try {
    const data = await OnuMac.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get ONU MAC by ID
// exports.getById = async (req, res) => {
//   try {
//     const item = await OnuMac.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "ONU MAC not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create ONU MAC
// exports.create = async (req, res) => {
//   try {
//     const item = await OnuMac.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update ONU MAC
// exports.update = async (req, res) => {
//   try {
//     const item = await OnuMac.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "ONU MAC not found" });

//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete ONU MAC
// exports.remove = async (req, res) => {
//   try {
//     const item = await OnuMac.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "ONU MAC not found" });

//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
