// controllers/billbooks.controller.js
const Billbook = require('../models/billbooks');

exports.getAll = async (req, res) => {
  try {
    const rows = await Billbook.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Billbook.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Billbook record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Billbook.create(req.body);
    res.status(201).json({ message: 'Billbook record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Billbook.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Billbook record not found' });
    await row.update(req.body);
    res.json({ message: 'Billbook record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Billbook.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Billbook record not found' });
    await row.destroy();
    res.json({ message: 'Billbook record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
