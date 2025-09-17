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
