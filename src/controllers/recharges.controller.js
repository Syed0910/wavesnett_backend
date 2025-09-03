// controllers/recharges.controller.js

const Recharge = require('../models/recharges');

exports.getAll = async (req, res) => {
  try {
    const rows = await Recharge.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Recharge.create(req.body);
    res.status(201).json({ message: 'Recharge record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    await row.update(req.body);
    res.json({ message: 'Recharge record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    await row.destroy();
    res.json({ message: 'Recharge record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
