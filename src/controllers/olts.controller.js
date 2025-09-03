// controllers/olts.controller.js
const Olt = require("../models/olts");

// Get all OLTS
exports.getAll = async (req, res) => {
  try {
    const data = await Olt.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get OLT by ID
// exports.getById = async (req, res) => {
//   try {
//     const item = await Olt.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OLT not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create OLT
// exports.create = async (req, res) => {
//   try {
//     const item = await Olt.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update OLT
// exports.update = async (req, res) => {
//   try {
//     const item = await Olt.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OLT not found" });

//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete OLT
// exports.remove = async (req, res) => {
//   try {
//     const item = await Olt.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OLT not found" });

//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
