// controllers/radusergroup.controller.js
const RadUserGroup = require('../models/radusergroup');

// ✅ Create new entry
exports.createRadUserGroup = async (req, res) => {
  try {
    const record = await RadUserGroup.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all entries
exports.getAllRadUserGroups = async (req, res) => {
  try {
    const records = await RadUserGroup.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get entry by ID
exports.getRadUserGroupById = async (req, res) => {
  try {
    const record = await RadUserGroup.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadUserGroup not found' });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update entry
exports.updateRadUserGroup = async (req, res) => {
  try {
    const record = await RadUserGroup.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadUserGroup not found' });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete entry
exports.deleteRadUserGroup = async (req, res) => {
  try {
    const record = await RadUserGroup.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadUserGroup not found' });

    await record.destroy();
    res.json({ message: 'RadUserGroup deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
