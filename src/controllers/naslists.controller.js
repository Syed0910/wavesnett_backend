// controllers/naslists.controller.js
const Naslist = require('../models/naslists');

exports.getAll = async (req, res) => {
  try {
    const rows = await Naslist.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Naslist.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Naslist record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Naslist.create(req.body);
    res.status(201).json({ message: 'Naslist record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Naslist.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Naslist record not found' });
    await row.update(req.body);
    res.json({ message: 'Naslist record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Naslist.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Naslist record not found' });
    await row.destroy();
    res.json({ message: 'Naslist record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
