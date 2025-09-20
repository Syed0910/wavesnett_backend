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
const updateTaxConfig = async (req, res) => {
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


const getKycConfig = async (req, res) => {
  try {
    console.log("Fetching KYC config..."); // Debug log
    
    // Fetch Ekyc provider status
    const ekycRow = await Config.findOne({ where: { name: 'configEKyc' }, raw: true });
    // Fetch QuickEKyc API key
    const quickekycRow = await Config.findOne({ where: { name: 'configQuickekyc' }, raw: true });

    console.log("EKyc row:", ekycRow); // Debug log
    console.log("QuickEKyc row:", quickekycRow); // Debug log

    const Ekyc = ekycRow && ekycRow.value ? JSON.parse(ekycRow.value) : { surepass: false, quickekyc: false };
    const quickekyc = quickekycRow && quickekycRow.value ? JSON.parse(quickekycRow.value) : {};
    
    const response = {
      kycApiType: { Surepass: "surepass", QuickEKyc: "quickekyc" },
      Ekyc,
      quickekyc,
      surepass: null  // you can replace null with data if you add Surepass config in DB
    };

    console.log("Sending response:", response); // Debug log
    res.json(response);

  } catch (err) {
    console.error("Error fetching KYC config:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

const updateKycConfig = async (req, res) => {
  try {
    console.log("Updating KYC config with:", req.body); // Debug log
    
    const { surepass, quickekyc } = req.body;

    // Update configEKyc (enable/disable providers)
    const ekycPayload = JSON.stringify({
      surepass: surepass?.enabled ?? false,
      quickekyc: quickekyc?.enabled ?? false
    });

    // Find or create configEKyc record
    const [ekycRecord, created] = await Config.findOrCreate({
      where: { name: 'configEKyc' },
      defaults: {
        name: 'configEKyc',
        value: ekycPayload,
        operator_id: 1, // You may need to adjust this based on your requirements
        zoneName: 'default' // You may need to adjust this based on your requirements
      }
    });

    if (!created) {
      await ekycRecord.update({ value: ekycPayload });
    }

    // Update QuickEKyc API key if provided
    if (quickekyc?.apiKey !== undefined) {
      const quickekycPayload = JSON.stringify({ apiKey: quickekyc.apiKey });
      
      const [quickekycRecord, quickekycCreated] = await Config.findOrCreate({
        where: { name: 'configQuickekyc' },
        defaults: {
          name: 'configQuickekyc',
          value: quickekycPayload,
          operator_id: 1, // You may need to adjust this based on your requirements
          zoneName: 'default' // You may need to adjust this based on your requirements
        }
      });

      if (!quickekycCreated) {
        await quickekycRecord.update({ value: quickekycPayload });
      }
    }

    res.json({ message: "KYC config updated successfully" });

  } catch (err) {
    console.error("Error updating KYC config:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
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


// Export everything
module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: del,
  getMailConfig,
  getTaxConfig,
  updateTaxConfig,
  getKycConfig,
  updateKycConfig
};


