// controllers/slastatuses.controller.js

const Slastatus = require('../models/slastatuses');

exports.getAll = async (req, res) => {
  try {
    const rows = await Slastatus.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Slastatus.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Slastatus record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Slastatus.create(req.body);
    res.status(201).json({ message: 'Slastatus record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Slastatus.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Slastatus record not found' });
    await row.update(req.body);
    res.json({ message: 'Slastatus record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Slastatus.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Slastatus record not found' });
    await row.destroy();
    res.json({ message: 'Slastatus record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
