// controllers/inventories.controller.js
const Inventory = require("../models/inventories");

// ✅ Get all inventories
exports.getAll = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.json(inventories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get inventory by ID
exports.getById = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) return res.status(404).json({ message: "Not found" });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create inventory
exports.create = async (req, res) => {
  try {
    const inventory = await Inventory.create({
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update inventory
exports.update = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) return res.status(404).json({ message: "Not found" });

    await inventory.update({ ...req.body, updated_at: new Date() });
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete inventory
exports.remove = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) return res.status(404).json({ message: "Not found" });

    await inventory.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
