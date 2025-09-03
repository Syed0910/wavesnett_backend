// controllers/radgroupcheck.controller.js
const RadGroupCheck = require('../models/radgroupcheck');

// ✅ Create new entry
exports.createRadGroupCheck = async (req, res) => {
  try {
    const record = await RadGroupCheck.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all entries
exports.getAllRadGroupChecks = async (req, res) => {
  try {
    const records = await RadGroupCheck.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get entry by ID
exports.getRadGroupCheckById = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupCheck not found' });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update entry
exports.updateRadGroupCheck = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupCheck not found' });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete entry
exports.deleteRadGroupCheck = async (req, res) => {
  try {
    const record = await RadGroupCheck.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupCheck not found' });

    await record.destroy();
    res.json({ message: 'RadGroupCheck deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
