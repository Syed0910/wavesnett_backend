// controllers/maps.controller.js
const Map = require("../models/maps");

// Get all maps
const getAll = async (req, res) => {
  try {
    const maps = await Map.findAll();
    res.json(maps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get map by ID
const getById = async (req, res) => {
  try {
    const map = await Map.findByPk(req.params.id);
    if (!map) return res.status(404).json({ message: "Not found" });
    res.json(map);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new map
const create = async (req, res) => {
  try {
    const { jdata, operator_id, createdBy, updatedBy } = req.body;
    const newMap = await Map.create({
      jdata,
      operator_id,
      createdBy,
      updatedBy,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).json(newMap);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update map
const update = async (req, res) => {
  try {
    const map = await Map.findByPk(req.params.id);
    if (!map) return res.status(404).json({ message: "Not found" });
    await map.update({ ...req.body, updated_at: new Date() });
    res.json(map);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete map
const remove = async (req, res) => {
  try {
    const map = await Map.findByPk(req.params.id);
    if (!map) return res.status(404).json({ message: "Not found" });
    await map.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
