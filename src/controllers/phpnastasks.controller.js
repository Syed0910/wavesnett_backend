// controllers/phpnastasks.controller.js
const Phpnastask = require('../models/phpnastasks');

exports.getAll = async (req, res) => {
  try {
    const rows = await Phpnastask.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Phpnastask.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnastask record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Phpnastask.create(req.body);
    res.status(201).json({ message: 'Phpnastask record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Phpnastask.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnastask record not found' });
    await row.update(req.body);
    res.json({ message: 'Phpnastask record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Phpnastask.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Phpnastask record not found' });
    await row.destroy();
    res.json({ message: 'Phpnastask record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
