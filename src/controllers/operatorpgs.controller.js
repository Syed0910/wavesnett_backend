const OperatorPg = require("../models/operatorpgs");

// Get all operatorpgs
exports.getAll = async (req, res) => {
  try {
    const data = await OperatorPg.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by ID
// exports.getById = async (req, res) => {
//   try {
//     const item = await OperatorPg.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OperatorPG not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create
// exports.create = async (req, res) => {
//   try {
//     const item = await OperatorPg.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update
// exports.update = async (req, res) => {
//   try {
//     const item = await OperatorPg.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OperatorPG not found" });

//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete
// exports.remove = async (req, res) => {
//   try {
//     const item = await OperatorPg.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OperatorPG not found" });

//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
