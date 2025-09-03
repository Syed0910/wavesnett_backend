// controllers/backprocesses.controller.js
const Backprocess = require('../models/backprocesses');

exports.getAll = async (req, res) => {
  try {
    const rows = await Backprocess.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Backprocess.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Backprocess record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // Ensure req.body.message is a JSON object/array if provided, not a plain string
    const newRow = await Backprocess.create(req.body);
    res.status(201).json({ message: 'Backprocess record created', id: newRow.id });
  } catch (err) {
    // If message is invalid JSON, DB will reject due to CHECK(json_valid(message))
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Backprocess.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Backprocess record not found' });
    await row.update(req.body);
    res.json({ message: 'Backprocess record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Backprocess.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Backprocess record not found' });
    await row.destroy();
    res.json({ message: 'Backprocess record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
