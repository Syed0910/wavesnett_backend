// controllers/invoicetypes.controller.js
const InvoiceType = require("../models/invoicetypes");

// Get all invoice types
const getAll = async (req, res) => {
  try {
    const types = await InvoiceType.findAll();
    res.json(types);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get invoice type by ID
const getById = async (req, res) => {
  try {
    const type = await InvoiceType.findByPk(req.params.id);
    if (!type) return res.status(404).json({ message: "Not found" });
    res.json(type);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new invoice type
const create = async (req, res) => {
  try {
    const newType = await InvoiceType.create(req.body);
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update invoice type
const update = async (req, res) => {
  try {
    const type = await InvoiceType.findByPk(req.params.id);
    if (!type) return res.status(404).json({ message: "Not found" });
    await type.update(req.body);
    res.json(type);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete invoice type
const remove = async (req, res) => {
  try {
    const type = await InvoiceType.findByPk(req.params.id);
    if (!type) return res.status(404).json({ message: "Not found" });
    await type.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
