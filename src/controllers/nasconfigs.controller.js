// controllers/nasconfigs.controller.js

const Nasconfig = require('../models/nasconfigs');

exports.getAll = async (req, res) => {
  try {
    const rows = await Nasconfig.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Nasconfig.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasconfig record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Nasconfig.create(req.body);
    res.status(201).json({ message: 'Nasconfig record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Nasconfig.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasconfig record not found' });
    await row.update(req.body);
    res.json({ message: 'Nasconfig record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Nasconfig.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasconfig record not found' });
    await row.destroy();
    res.json({ message: 'Nasconfig record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
