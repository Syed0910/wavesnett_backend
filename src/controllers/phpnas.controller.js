// controllers/phpnas.controller.js
const Phpnas = require('../models/phpnas');

exports.getAll = async (req, res) => {
  try {
    const rows = await Phpnas.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Phpnas.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnas record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // Ensure req.body.sysinfo is a JSON object/array if provided, not a plain string
    const newRow = await Phpnas.create(req.body);
    res.status(201).json({ message: 'Phpnas record created', id: newRow.id });
  } catch (err) {
    // If sysinfo is not valid JSON, DB will reject due to CHECK(json_valid(sysinfo))
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Phpnas.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnas record not found' });
    await row.update(req.body);
    res.json({ message: 'Phpnas record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Phpnas.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnas record not found' });
    await row.destroy();
    res.json({ message: 'Phpnas record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
