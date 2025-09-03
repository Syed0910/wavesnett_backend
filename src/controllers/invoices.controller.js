// controllers/invoices.controller.js

const Invoice = require('../models/invoices');

exports.getAll = async (req, res) => {
  try {
    const rows = await Invoice.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Invoice.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoice record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Invoice.create(req.body);
    res.status(201).json({ message: 'Invoice record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Invoice.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoice record not found' });
    await row.update(req.body);
    res.json({ message: 'Invoice record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Invoice.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoice record not found' });
    await row.destroy();
    res.json({ message: 'Invoice record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
