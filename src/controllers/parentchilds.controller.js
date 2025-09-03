// controllers/parentchilds.controller.js

const Parentchild = require('../models/parentchilds');

exports.getAll = async (req, res) => {
  try {
    const rows = await Parentchild.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Parentchild.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Parentchild record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    // If sending arrays for child_id/parent_id, either stringify client-side
    // or adjust the model to JSON with get/set wrappers. Here we accept TEXT.
    const newRow = await Parentchild.create(req.body);
    res.status(201).json({ message: 'Parentchild record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Parentchild.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Parentchild record not found' });
    await row.update(req.body);
    res.json({ message: 'Parentchild record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Parentchild.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Parentchild record not found' });
    await row.destroy();
    res.json({ message: 'Parentchild record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
