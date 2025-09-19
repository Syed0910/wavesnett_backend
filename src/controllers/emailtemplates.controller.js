// src/controllers/emailtemplates.controller.js
const EmailTemplate = require('../models/emailtemplates');

// Get all templates
exports.getAll = async (req, res) => {
  try {
    const templates = await EmailTemplate.findAll();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
};

// Get template by ID
exports.getById = async (req, res) => {
  try {
    const template = await EmailTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Not found' });
    res.json(template);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch template' });
  }
};

// ✅ Get template by notifyName
exports.getByNotifyName = async (req, res) => {
  try {
    const template = await EmailTemplate.findOne({
      where: { notifyName: req.params.notifyName }
    });
    if (!template) return res.status(404).json({ error: 'Not found' });
    res.json(template);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch template by notifyName' });
  }
};

// Create template
exports.create = async (req, res) => {
  try {
    const template = await EmailTemplate.create(req.body);
    res.status(201).json(template);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create template' });
  }
};

// Update template
exports.update = async (req, res) => {
  try {
    const template = await EmailTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Not found' });
    await template.update(req.body);
    res.json(template);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update template' });
  }
};

// Delete template
exports.delete = async (req, res) => {
  try {
    const template = await EmailTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Not found' });
    await template.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete template' });
  }
};
