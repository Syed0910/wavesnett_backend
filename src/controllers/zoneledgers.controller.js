// controllers/zoneledgers.controller.js
const Zoneledger = require('../models/zoneledgers');

exports.getAll = async (req, res) => {
  try {
    const rows = await Zoneledger.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Zoneledger.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Zoneledger record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Zoneledger.create(req.body);
    res.status(201).json({ message: 'Zoneledger record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Zoneledger.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Zoneledger record not found' });

    await row.update(req.body);
    res.json({ message: 'Zoneledger record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Zoneledger.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Zoneledger record not found' });

    await row.destroy();
    res.json({ message: 'Zoneledger record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
