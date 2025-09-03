// controllers/netdiags.controller.js
const Netdiag = require('../models/netdiags');

exports.getAll = async (req, res) => {
  try {
    const rows = await Netdiag.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Netdiag.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Netdiag record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // Expecting req.body.jdata to be a JSON object/array if using DataTypes.JSON
    const newRow = await Netdiag.create(req.body);
    res.status(201).json({ message: 'Netdiag record created', id: newRow.id });
  } catch (err) {
    // If jdata is not valid JSON, MySQL/MariaDB will throw because of json_valid()
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Netdiag.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Netdiag record not found' });
    await row.update(req.body);
    res.json({ message: 'Netdiag record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Netdiag.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Netdiag record not found' });
    await row.destroy();
    res.json({ message: 'Netdiag record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
