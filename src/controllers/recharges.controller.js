const Recharge = require('../models/recharges');

exports.getAll = async (req, res) => {
  try {
    const rows = await Recharge.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = {
      ...req.body,
      expiryDetails: req.body.expiryDetails || {},
      otts: req.body.otts || [],
      planType: req.body.planType || 1,
      planCategory: req.body.planCategory || 1,
      franchiseeCost: req.body.franchiseeCost || 0,
      customerCost: req.body.customerCost || 0,
      agr: req.body.agr || 0,
      startDate: req.body.startDate ? new Date(req.body.startDate) : new Date(),
      created_at: new Date(),
      updated_at: new Date()
    };

    const newRow = await Recharge.create(data);
    res.status(201).json({ message: 'Recharge record created', id: newRow.id });
  } catch (err) {
    console.error("Recharge creation error:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    await row.update(req.body);
    res.json({ message: 'Recharge record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await Recharge.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: 'Recharge record not found' });
    await row.destroy();
    res.json({ message: 'Recharge record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
