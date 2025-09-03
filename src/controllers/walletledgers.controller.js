// controllers/walletledgers.controller.js
const Walletledger = require("../models/walletledgers");

// Get all
exports.getAll = async (req, res) => {
  try {
    const records = await Walletledger.findAll();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch walletledgers", details: err.message });
  }
};

// // Get by ID
// exports.getById = async (req, res) => {
//   try {
//     const record = await Walletledger.findByPk(req.params.id);
//     if (!record) return res.status(404).json({ error: "Walletledger not found" });
//     res.json(record);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching walletledger", details: err.message });
//   }
// };

// // Create
// exports.create = async (req, res) => {
//   try {
//     const record = await Walletledger.create(req.body);
//     res.status(201).json(record);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to create walletledger", details: err.message });
//   }
// };

// // Update
// exports.update = async (req, res) => {
//   try {
//     const record = await Walletledger.findByPk(req.params.id);
//     if (!record) return res.status(404).json({ error: "Walletledger not found" });

//     await record.update(req.body);
//     res.json(record);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to update walletledger", details: err.message });
//   }
// };

// // Delete
// exports.remove = async (req, res) => {
//   try {
//     const record = await Walletledger.findByPk(req.params.id);
//     if (!record) return res.status(404).json({ error: "Walletledger not found" });

//     await record.destroy();
//     res.json({ message: "Walletledger deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete walletledger", details: err.message });
//   }
// };

// // Custom: Get by operator_id
// exports.getByOperator = async (req, res) => {
//   try {
//     const records = await Walletledger.findAll({
//       where: { operator_id: req.params.operatorId },
//     });
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch walletledgers by operator", details: err.message });
//   }
// };
