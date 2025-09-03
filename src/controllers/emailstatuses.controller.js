// controllers/emailstatuses.controller.js
const Emailstatuses = require('../models/emailstatuses');

exports.getAll = async (req, res) => {
  try {
    const rows = await Emailstatuses.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Emailstatuses.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Emailstatus record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Emailstatuses.create(req.body);
    res.status(201).json({ message: 'Emailstatus record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Emailstatuses.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Emailstatus record not found' });

    await row.update(req.body);
    res.json({ message: 'Emailstatus record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Emailstatuses.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Emailstatus record not found' });

    await row.destroy();
    res.json({ message: 'Emailstatus record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};