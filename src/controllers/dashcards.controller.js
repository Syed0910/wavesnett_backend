// controllers/dashcards.controller.js
const Dashcard = require('../models/dashcards');

exports.getAll = async (req, res) => {
  try {
    const rows = await Dashcard.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Dashcard.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Dashcard record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // Ensure req.body.value is an object/array (valid JSON), not a pre-stringified value
    const { value, operator_id } = req.body;
    if (value == null || operator_id == null) {
      return res.status(400).json({ message: 'value and operator_id are required' });
    }
    const newRow = await Dashcard.create(req.body);
    res.status(201).json({ message: 'Dashcard record created', id: newRow.id });
  } catch (err) {
    // If value is invalid JSON, DB will reject due to CHECK(json_valid(value))
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Dashcard.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Dashcard record not found' });
    await row.update(req.body);
    res.json({ message: 'Dashcard record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Dashcard.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Dashcard record not found' });
    await row.destroy();
    res.json({ message: 'Dashcard record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
