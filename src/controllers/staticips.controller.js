// controllers/staticips.controller.js
const StaticIp = require('../models/staticips');

// ✅ Create new staticip
exports.createStaticIp = async (req, res) => {
  try {
    const staticip = await StaticIp.create(req.body);
    res.status(201).json(staticip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all staticips
exports.getAllStaticIps = async (req, res) => {
  try {
    const staticips = await StaticIp.findAll();
    res.json(staticips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get staticip by ID
exports.getStaticIpById = async (req, res) => {
  try {
    const staticip = await StaticIp.findByPk(req.params.id);
    if (!staticip) return res.status(404).json({ error: 'StaticIp not found' });
    res.json(staticip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update staticip
exports.updateStaticIp = async (req, res) => {
  try {
    const staticip = await StaticIp.findByPk(req.params.id);
    if (!staticip) return res.status(404).json({ error: 'StaticIp not found' });

    await staticip.update(req.body);
    res.json(staticip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete staticip
exports.deleteStaticIp = async (req, res) => {
  try {
    const staticip = await StaticIp.findByPk(req.params.id);
    if (!staticip) return res.status(404).json({ error: 'StaticIp not found' });

    await staticip.destroy();
    res.json({ message: 'StaticIp deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
