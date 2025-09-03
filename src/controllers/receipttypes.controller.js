// controllers/receipttypes.controller.js
const ReceiptType = require("../models/receipttypes");

// ✅ Get all
const getAll = async (req, res) => {
  try {
    const data = await ReceiptType.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get by ID
const getById = async (req, res) => {
  try {
    const item = await ReceiptType.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create
const create = async (req, res) => {
  try {
    const { name, notes } = req.body;

    const newItem = await ReceiptType.create({ name, notes });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update
const update = async (req, res) => {
  try {
    const item = await ReceiptType.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.update(req.body);
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete
const remove = async (req, res) => {
  try {
    const item = await ReceiptType.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await item.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
