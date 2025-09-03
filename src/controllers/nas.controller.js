// controllers/nas.controller.js
const Nas = require('../models/nas');

// ✅ Create new NAS
exports.createNas = async (req, res) => {
  try {
    const nas = await Nas.create(req.body);
    res.status(201).json(nas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all NAS
exports.getAllNas = async (req, res) => {
  try {
    const nasList = await Nas.findAll();
    res.json(nasList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get NAS by ID
exports.getNasById = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ error: 'NAS not found' });
    res.json(nas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update NAS
exports.updateNas = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ error: 'NAS not found' });

    await nas.update(req.body);
    res.json(nas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete NAS
exports.deleteNas = async (req, res) => {
  try {
    const nas = await Nas.findByPk(req.params.id);
    if (!nas) return res.status(404).json({ error: 'NAS not found' });

    await nas.destroy();
    res.json({ message: 'NAS deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
