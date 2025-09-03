// src/controllers/emailtemplates.controller.js
const EmailTemplate = require('../models/emailtemplates');

exports.getAll = async (req, res) => {
  try {
    const rows = await EmailTemplate.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await EmailTemplate.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'EmailTemplate not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await EmailTemplate.create(req.body);
    res.status(201).json({ message: 'EmailTemplate created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await EmailTemplate.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'EmailTemplate not found' });
    await row.update(req.body);
    res.json({ message: 'EmailTemplate updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await EmailTemplate.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'EmailTemplate not found' });
    await row.destroy();
    res.json({ message: 'EmailTemplate deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};