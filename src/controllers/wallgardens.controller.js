const WallGardens = require("../models/wallgardens");

// ✅ Get all
exports.getAllWallGardens = async (req, res) => {
  try {
    const rows = await WallGardens.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get by ID
exports.getWallGardenById = async (req, res) => {
  try {
    const row = await WallGardens.getById(req.params.id);
    if (!row) return res.status(404).json({ message: "Wallgarden not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create
exports.createWallGarden = async (req, res) => {
  try {
    const newRow = await WallGardens.create(req.body);
    res.status(201).json(newRow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update
exports.updateWallGarden = async (req, res) => {
  try {
    const updated = await WallGardens.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete
exports.deleteWallGarden = async (req, res) => {
  try {
    const result = await WallGardens.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
