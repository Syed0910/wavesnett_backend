// controllers/receipts.controller.js

const Receipt = require('../models/receipts');

exports.getAll = async (req, res) => {
  try {
    const rows = await Receipt.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Receipt.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Receipt record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Receipt.create(req.body);
    res.status(201).json({ message: 'Receipt record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Receipt.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Receipt record not found' });
    await row.update(req.body);
    res.json({ message: 'Receipt record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Receipt.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Receipt record not found' });
    await row.destroy();
    res.json({ message: 'Receipt record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
