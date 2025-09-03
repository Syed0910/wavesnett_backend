const InvoiceStatus = require("../models/invoicestatuses");

// Get all
const getAll = async (req, res) => {
  try {
    const statuses = await InvoiceStatus.findAll();
    res.json(statuses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get by ID
const getById = async (req, res) => {
  try {
    const status = await InvoiceStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });
    res.json(status);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const create = async (req, res) => {
  try {
    const newStatus = await InvoiceStatus.create(req.body);
    res.status(201).json(newStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update
const update = async (req, res) => {
  try {
    const status = await InvoiceStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });
    await status.update(req.body);
    res.json(status);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete
const remove = async (req, res) => {
  try {
    const status = await InvoiceStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });
    await status.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Export functions as an object
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
