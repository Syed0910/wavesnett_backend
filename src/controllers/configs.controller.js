const Config = require('../models/configs');

// ---------------- Generic CRUD ----------------
const getAll = async (req, res) => {
  try {
    const configs = await Config.findAll();
    res.json(configs);
  } catch (err) {
    console.error('Error fetching configs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

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

const create = async (req, res) => {
  try {
    const { name, operator_id, zoneName } = req.body;
    if (!name || !operator_id || !zoneName) {
      return res.status(400).json({ message: 'name, operator_id, and zoneName are required' });
    }

    const newRow = await Config.create(req.body);
    res.status(201).json({ message: 'Config record created', id: newRow.id });
  } catch (err) {
    console.error('Error creating config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

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

const remove = async (req, res) => {
  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    await config.destroy();
    res.json({ message: 'Config deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- Tax ----------------
const getTaxConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    const parsedValue = row.value ? JSON.parse(row.value) : {};
    res.json(parsedValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTaxConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    await row.update({ value: JSON.stringify(req.body) });
    res.json({ message: 'Tax configuration updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- KYC ----------------
const getKycConfig = async (req, res) => {
  try {
    const ekycRow = await Config.findOne({ where: { name: 'configEKyc' }, raw: true });
    const quickekycRow = await Config.findOne({ where: { name: 'configQuickekyc' }, raw: true });

    const Ekyc = ekycRow && ekycRow.value ? JSON.parse(ekycRow.value) : { surepass: false, quickekyc: false };
    const quickekyc = quickekycRow && quickekycRow.value ? JSON.parse(quickekycRow.value) : {};

    res.json({
      kycApiType: { Surepass: "surepass", QuickEKyc: "quickekyc" },
      Ekyc,
      quickekyc,
      surepass: null
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

const updateKycConfig = async (req, res) => {
  try {
    const { surepass, quickekyc } = req.body;

    const ekycPayload = JSON.stringify({
      surepass: surepass?.enabled ?? false,
      quickekyc: quickekyc?.enabled ?? false
    });

    const [ekycRecord, created] = await Config.findOrCreate({
      where: { name: 'configEKyc' },
      defaults: {
        name: 'configEKyc',
        value: ekycPayload,
        operator_id: 1,
        zoneName: 'default'
      }
    });

    if (!created) {
      await ekycRecord.update({ value: ekycPayload });
    }

    if (quickekyc?.apiKey !== undefined) {
      const quickekycPayload = JSON.stringify({ apiKey: quickekyc.apiKey });

      const [quickekycRecord, quickekycCreated] = await Config.findOrCreate({
        where: { name: 'configQuickekyc' },
        defaults: {
          name: 'configQuickekyc',
          value: quickekycPayload,
          operator_id: 1,
          zoneName: 'default'
        }
      });

      if (!quickekycCreated) {
        await quickekycRecord.update({ value: quickekycPayload });
      }
    }

    res.json({ message: "KYC config updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// ---------------- Theme ----------------
const getThemeConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'themeConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Theme config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateThemeConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'configKyc' } }
    );

    if (updated === 0) {
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
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- Extra ----------------
const getExtraConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'extraConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Extra config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateExtraConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'extraConfig' } }
    );

    if (updated === 0) {
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
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- Portal, Hotspot, Permissions ----------------
const getPortalConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'portalConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Portal config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- Portal ----------------
const updatePortalConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'portalConfig' } }
    );

    if (updated === 0) {
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
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// ---------------- Hotspot ----------------
const getHotspotConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'hotspotConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Hotspot config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateHotspotConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'hotspotConfig' } }
    );

    if (updated === 0) {
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
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// ---------------- Permissions ----------------
const getPermissionsConfig = async (req, res) => {
  try {
    const row = await Config.findOne({ where: { name: 'permissionsConfig' }, raw: true });
    if (!row) return res.status(404).json({ message: "Permissions config not found" });

    const value = row.value ? JSON.parse(row.value) : {};
    res.json(value);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updatePermissionsConfig = async (req, res) => {
  try {
    const payload = JSON.stringify(req.body);

    const [updated] = await Config.update(
      { value: payload },
      { where: { name: 'permissionsConfig' } }
    );

    if (updated === 0) {
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
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// ---------------- Export all ----------------
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getTaxConfig,
  updateTaxConfig,
  getKycConfig,
  updateKycConfig,
  getThemeConfig,
  updateThemeConfig,
  getExtraConfig,
  updateExtraConfig,
  getPortalConfig,
  updatePortalConfig,
  getHotspotConfig,
  updateHotspotConfig,
  getPermissionsConfig,
  updatePermissionsConfig
};
