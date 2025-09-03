const Ott = require("../models/otts");

// Get all OTTs
exports.getAll = async (req, res) => {
  try {
    const data = await Ott.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get OTT by ID
// exports.getById = async (req, res) => {
//   try {
//     const item = await Ott.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTT not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create OTT
// exports.create = async (req, res) => {
//   try {
//     const item = await Ott.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update OTT
// exports.update = async (req, res) => {
//   try {
//     const item = await Ott.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTT not found" });

//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete OTT
// exports.remove = async (req, res) => {
//   try {
//     const item = await Ott.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTT not found" });

//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
