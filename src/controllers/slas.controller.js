// controllers/slas.controller.js

const Sla = require('../models/slas');

exports.getAll = async (req, res) => {
  try {
    const rows = await Sla.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Sla.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Sla record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Sla.create(req.body);
    res.status(201).json({ message: 'Sla record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Sla.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Sla record not found' });
    await row.update(req.body);
    res.json({ message: 'Sla record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Sla.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Sla record not found' });
    await row.destroy();
    res.json({ message: 'Sla record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
