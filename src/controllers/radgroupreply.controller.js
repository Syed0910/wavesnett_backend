// controllers/radgroupreply.controller.js
const RadGroupReply = require('../models/radgroupreply');

// ✅ Create new entry
exports.createRadGroupReply = async (req, res) => {
  try {
    const record = await RadGroupReply.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all entries
exports.getAllRadGroupReplies = async (req, res) => {
  try {
    const records = await RadGroupReply.findAll();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get entry by ID
exports.getRadGroupReplyById = async (req, res) => {
  try {
    const record = await RadGroupReply.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupReply not found' });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update entry
exports.updateRadGroupReply = async (req, res) => {
  try {
    const record = await RadGroupReply.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupReply not found' });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete entry
exports.deleteRadGroupReply = async (req, res) => {
  try {
    const record = await RadGroupReply.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: 'RadGroupReply not found' });

    await record.destroy();
    res.json({ message: 'RadGroupReply deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
