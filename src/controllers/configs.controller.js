// controllers/configs.controller.js
const Config = require('../models/configs');

// GET /api/configs
exports.getAll = async (req, res) => {
  try {
    const rows = await Config.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/configs/:id
exports.getById = async (req, res) => {
  try {
    const row = await Config.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Config record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/configs
exports.create = async (req, res) => {
  try {
    // Basic required fields check (adjust as needed)
    const { name, operator_id, zoneName } = req.body;
    if (!name || !operator_id || !zoneName) {
      return res.status(400).json({ message: 'name, operator_id, and zoneName are required' });
    }

    const newRow = await Config.create(req.body);
    res.status(201).json({ message: 'Config record created', id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/configs/:id
exports.update = async (req, res) => {
  try {
    const row = await Config.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Config record not found' });

    await row.update(req.body);
    res.json({ message: 'Config record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/configs/:id
exports.delete = async (req, res) => {
  try {
    const row = await Config.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Config record not found' });

    await row.destroy();
    res.json({ message: 'Config record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
