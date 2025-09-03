// controllers/nasarchives.controller.js

const Nasarchive = require('../models/nasarchives');

exports.getAll = async (req, res) => {
  try {
    const rows = await Nasarchive.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Nasarchive.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasarchive record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Nasarchive.create(req.body);
    res.status(201).json({ message: 'Nasarchive record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Nasarchive.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasarchive record not found' });
    await row.update(req.body);
    res.json({ message: 'Nasarchive record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Nasarchive.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Nasarchive record not found' });
    await row.destroy();
    res.json({ message: 'Nasarchive record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
