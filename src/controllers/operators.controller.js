// controllers/operators.controller.js
const Operator = require("../models/operators");

// Get all operators
exports.getAll = async (req, res) => {
  try {
    const operators = await Operator.findAll();
    res.json(operators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get operator by ID
// exports.getById = async (req, res) => {
//   try {
//     const operator = await Operator.findByPk(req.params.id);
//     if (!operator) return res.status(404).json({ error: "Operator not found" });
//     res.json(operator);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create operator
// exports.create = async (req, res) => {
//   try {
//     const operator = await Operator.create(req.body);
//     res.status(201).json(operator);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update operator
// exports.update = async (req, res) => {
//   try {
//     const operator = await Operator.findByPk(req.params.id);
//     if (!operator) return res.status(404).json({ error: "Operator not found" });

//     await operator.update(req.body);
//     res.json(operator);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete operator
// exports.remove = async (req, res) => {
//   try {
//     const operator = await Operator.findByPk(req.params.id);
//     if (!operator) return res.status(404).json({ error: "Operator not found" });

//     await operator.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
