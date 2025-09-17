// controllers/configs.controller.js
const Config = require('../models/configs');

// Get all configs
const getAll = async (req, res) => {
  try {
    const configs = await Config.findAll();
    res.json(configs);
  } catch (err) {
    console.error('Error fetching configs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get config by ID
const getById = async (req, res) => {
  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    res.json(config);
  } catch (err) {
    console.error('Error fetching config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create new config
const create = async (req, res) => {
  try {
    const config = await Config.create(req.body);
    res.status(201).json(config);
  } catch (err) {
    console.error('Error creating config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update config by ID
const update = async (req, res) => {
  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    await config.update(req.body);
    res.json(config);
  } catch (err) {
    console.error('Error updating config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete config
const del = async (req, res) => {
  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    await config.destroy();
    res.json({ message: 'Config deleted' });
  } catch (err) {
    console.error('Error deleting config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// ✅ Special: Mail Config
const getMailConfig = async (req, res) => {
  try {
    const config = await Config.findOne({ where: { name: 'configEmail' } });

    if (!config) {
      return res.status(404).json({ error: 'Mail config not found' });
    }

    const parsed = JSON.parse(config.value);
    const firstKey = Object.keys(parsed)[0];
    const settings = parsed[firstKey];

    res.json({
      fromEmail: settings.mail_from_address,
      smtpServer: settings.mail_smtp_address,
      smtpSecure: settings.mail_smtp_secure,
      smtpPort: settings.mail_smtp_port,
      username: settings.mail_username,
      password: settings.mail_password,
    });
  } catch (err) {
    console.error('Error fetching mail config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export everything
module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: del,
  getMailConfig,
};

// GET /api/configs/tax
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

// GET /api/configs/kyc
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

// PUT /api/configs/kyc
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

// GET /api/configs/theme
exports.getThemeConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'themeConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Theme config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching theme config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/configs/theme
exports.updateThemeConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'themeConfig' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'themeConfig',
        value: payload,
        operator_id: 1,
        zoneName: 'default'
      });
      return res.status(201).json({ message: "Theme config created" });
    }

    res.json({ message: "Theme config updated" });
  } catch (err) {
    console.error("Error updating theme config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /api/configs/extra
exports.getExtraConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'extraConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Extra config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching extra config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/configs/extra
exports.updateExtraConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'extraConfig' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'extraConfig',
        value: payload,
        operator_id: 1,
        zoneName: 'default'
      });
      return res.status(201).json({ message: "Extra config created" });
    }

    res.json({ message: "Extra config updated" });
  } catch (err) {
    console.error("Error updating extra config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /api/configs/portal
exports.getPortalConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'portalConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Portal config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching portal config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/configs/portal
exports.updatePortalConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'portalConfig' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'portalConfig',
        value: payload,
        operator_id: 1,
        zoneName: 'default'
      });
      return res.status(201).json({ message: "Portal config created" });
    }

    res.json({ message: "Portal config updated" });
  } catch (err) {
    console.error("Error updating portal config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /api/configs/hotspot
exports.getHotspotConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'hotspotConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Hotspot config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching hotspot config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/configs/hotspot
exports.updateHotspotConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'hotspotConfig' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'hotspotConfig',
        value: payload,
        operator_id: 1,
        zoneName: 'default'
      });
      return res.status(201).json({ message: "Hotspot config created" });
    }

    res.json({ message: "Hotspot config updated" });
  } catch (err) {
    console.error("Error updating hotspot config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET /api/configs/permissions
exports.getPermissionsConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'permissionsConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Permissions config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    console.error("Error fetching permissions config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /api/configs/permissions
exports.updatePermissionsConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'permissionsConfig' } }
    );

    if (updated === 0) {
      // No record exists, create one
      await Config.create({
        name: 'permissionsConfig',
        value: payload,
        operator_id: 1,
        zoneName: 'default'
      });
      return res.status(201).json({ message: "Permissions config created" });
    }

    res.json({ message: "Permissions config updated" });
  } catch (err) {
    console.error("Error updating permissions config:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};