// controllers/radacct.controller.js

const Radacct = require('../models/radacct');

exports.getAll = async (req, res) => {
  try {
    const rows = await Radacct.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Radacct.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacct record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Radacct.create(req.body);
    res.status(201).json({ message: 'Radacct record created', radacctid: newRow.radacctid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Radacct.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacct record not found' });
    await row.update(req.body);
    res.json({ message: 'Radacct record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Radacct.findByPk(req.params.radacctid);
    if (!row) return res.status(404).json({ message: 'Radacct record not found' });
    await row.destroy();
    res.json({ message: 'Radacct record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
