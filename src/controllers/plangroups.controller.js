// controllers/plangroups.controller.js

const Plangroup = require('../models/plangroups');

exports.getAll = async (req, res) => {
  try {
    const rows = await Plangroup.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Plangroup.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plangroup record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Plangroup.create(req.body);
    res.status(201).json({ message: 'Plangroup record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Plangroup.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plangroup record not found' });
    await row.update(req.body);
    res.json({ message: 'Plangroup record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Plangroup.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Plangroup record not found' });
    await row.destroy();
    res.json({ message: 'Plangroup record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
