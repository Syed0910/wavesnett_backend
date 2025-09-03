const Tr069Diags = require("../models/tr069diags");

// ✅ Get all
exports.getAllDiags = async (req, res) => {
  try {
    const rows = await Tr069Diags.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get by ID
exports.getDiagById = async (req, res) => {
  try {
    const row = await Tr069Diags.getById(req.params.id);
    if (!row) return res.status(404).json({ message: "Diag not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create
exports.createDiag = async (req, res) => {
  try {
    const newRow = await Tr069Diags.create(req.body);
    res.status(201).json(newRow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update
exports.updateDiag = async (req, res) => {
  try {
    const updated = await Tr069Diags.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete
exports.deleteDiag = async (req, res) => {
  try {
    const result = await Tr069Diags.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
