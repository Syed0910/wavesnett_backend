const Config = require('../models/configs');


// ----------------------
// Generic CRUD Handlers
// ----------------------
async function getAll(req, res) {

  try {
    const configs = await Config.findAll();
    res.json(configs);
  } catch (err) {
    console.error('Error fetching configs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function getById(req, res) {


  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    res.json(config);
  } catch (err) {
    console.error('Error fetching config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function create(req, res) {
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
}


async function update(req, res) {

  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    await config.update(req.body);
    res.json(config);
  } catch (err) {
    console.error('Error updating config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function remove(req, res) {

  try {
    const config = await Config.findByPk(req.params.id);
    if (!config) return res.status(404).json({ error: 'Config not found' });
    await config.destroy();
    res.json({ message: 'Config deleted' });
  } catch (err) {
    console.error('Error deleting config:', err);
    res.status(500).json({ error: 'Internal server error' });
  }

}

// ----------------------
// Specific Configs
// ----------------------

async function getTaxConfig(req, res) {

  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    res.json(row.value ? JSON.parse(row.value) : {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateTaxConfig(req, res) {
  try {
    const row = await Config.findOne({ where: { name: 'configTax' } });
    if (!row) return res.status(404).json({ message: 'Tax config not found' });

    await row.update({ value: JSON.stringify(req.body) });
    res.json({ message: 'Tax configuration updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getKycConfig(req, res) {
  try {

    const ekycRow = await Config.findOne({ where: { name: 'configEKyc' }, raw: true });
    const quickekycRow = await Config.findOne({ where: { name: 'configQuickekyc' }, raw: true });

    const Ekyc = ekycRow?.value ? JSON.parse(ekycRow.value) : { surepass: false, quickekyc: false };
    const quickekyc = quickekycRow?.value ? JSON.parse(quickekycRow.value) : {};

    res.json({
      kycApiType: { Surepass: "surepass", QuickEKyc: "quickekyc" },
      Ekyc,
      quickekyc
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
}

async function updateKycConfig(req, res) {
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

    if (!created) await ekycRecord.update({ value: ekycPayload });

    if (quickekyc?.apiKey) {
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

      if (!quickekycCreated) await quickekycRecord.update({ value: quickekycPayload });
    }

    res.json({ message: "KYC config updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
}

// ----------------------
// Stub Handlers for Theme, Extra, Portal, etc.
// ----------------------
async function getThemeConfig(req, res) {
  res.json({ message: "Theme config endpoint not implemented yet" });
}
async function updateThemeConfig(req, res) {
  res.json({ message: "Theme config update endpoint not implemented yet" });
}

async function getExtraConfig(req, res) {
  res.json({ message: "Extra config endpoint not implemented yet" });
}
async function updateExtraConfig(req, res) {
  res.json({ message: "Extra config update endpoint not implemented yet" });
}

async function getPortalConfig(req, res) {
  res.json({ message: "Portal config endpoint not implemented yet" });
}
async function updatePortalConfig(req, res) {
  res.json({ message: "Portal config update endpoint not implemented yet" });
}

async function getHotspotConfig(req, res) {
  res.json({ message: "Hotspot config endpoint not implemented yet" });
}
async function updateHotspotConfig(req, res) {
  res.json({ message: "Hotspot config update endpoint not implemented yet" });
}

async function getPermissionsConfig(req, res) {
  res.json({ message: "Permissions config endpoint not implemented yet" });
}
async function updatePermissionsConfig(req, res) {
  res.json({ message: "Permissions config update endpoint not implemented yet" });
}

// ✅ Final Export

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

