// controllers/radacctarchives.controller.js

const Radacctarchive = require('../models/radacctarchives');

exports.getAll = async (req, res) => {
  try {
    const rows = await Radacctarchive.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Radacctarchive.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacctarchive record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Radacctarchive.create(req.body);
    res.status(201).json({ message: 'Radacctarchive record created', radacctid: newRow.radacctid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Radacctarchive.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacctarchive record not found' });
    await row.update(req.body);
    res.json({ message: 'Radacctarchive record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Radacctarchive.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacctarchive record not found' });
    await row.destroy();
    res.json({ message: 'Radacctarchive record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
