// controllers/plans.controller.js

const Plan = require('../models/plans');

exports.getAll = async (req, res) => {
  try {
    const rows = await Plan.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Plan.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plan record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Plan.create(req.body);
    res.status(201).json({ message: 'Plan record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Plan.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plan record not found' });
    await row.update(req.body);
    res.json({ message: 'Plan record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Plan.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plan record not found' });
    await row.destroy();
    res.json({ message: 'Plan record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
