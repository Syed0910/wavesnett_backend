// controllers/invoiceitems.controller.js

const Invoiceitem = require('../models/invoiceitems');

exports.getAll = async (req, res) => {
  try {
    const rows = await Invoiceitem.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Invoiceitem.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoiceitem record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await Invoiceitem.create(req.body);
    res.status(201).json({ message: 'Invoiceitem record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Invoiceitem.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoiceitem record not found' });
    await row.update(req.body);
    res.json({ message: 'Invoiceitem record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Invoiceitem.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Invoiceitem record not found' });
    await row.destroy();
    res.json({ message: 'Invoiceitem record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
