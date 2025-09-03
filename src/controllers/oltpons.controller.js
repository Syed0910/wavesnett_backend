// controllers/oltpons.controller.js
const Oltpon = require("../models/oltpons");

exports.getAll = async (req, res) => {
  try {
    const data = await Oltpon.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getById = async (req, res) => {
//   try {
//     const item = await Oltpon.findByPk(req.params.id);
//     if (!item) {
//       return res.status(404).json({ error: "Oltpon not found" });
//     }
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.create = async (req, res) => {
//   try {
//     const item = await Oltpon.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const item = await Oltpon.findByPk(req.params.id);
//     if (!item) {
//       return res.status(404).json({ error: "Oltpon not found" });
//     }
//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.remove = async (req, res) => {
//   try {
//     const item = await Oltpon.findByPk(req.params.id);
//     if (!item) {
//       return res.status(404).json({ error: "Oltpon not found" });
//     }
//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
