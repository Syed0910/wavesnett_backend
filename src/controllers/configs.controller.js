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
exports.getTaxConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    // Parse the JSON value before sending
    const parsedValue = row.value ? JSON.parse(row.value) : {};
    res.json(parsedValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/configs/tax
exports.updateTaxConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    // Convert updated tax settings back to JSON
    await row.update({ value: JSON.stringify(req.body) });

    res.json({ message: 'Tax configuration updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getKycConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'configKyc' }, raw: true });
    if (!row) return res.status(404).json({ message: "KYC config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching KYC config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateKycConfig = async (req, res) => {
  try {
    const { provider, apiKey, isEnabled } = req.body;

    const payload = JSON.stringify({
      provider,
      apiKey,
      isEnabled
    });

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'configKyc' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'configKyc',
        value: payload,
        operator_id: 1,  // adjust based on your multi-tenant logic
        zoneName: 'default'
      });
      return res.status(201).json({ message: "KYC config created" });
    }

    res.json({ message: "KYC config updated" });
  } catch (err) {
    console.error("Error updating KYC config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};