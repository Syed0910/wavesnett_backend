const PasswordReset = require('../models/password_resets');

exports.getAll = async (req, res) => {
  try {
    const rows = await PasswordReset.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByEmail = async (req, res) => {
  try {
    const rows = await PasswordReset.findAll({ where: { email: req.params.email }, raw: true });
    if (!rows.length) return res.status(404).json({ message: 'No password reset records found for this email' });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Optional: use both email and token to uniquely identify a row:
exports.getOne = async (req, res) => {
  try {
    const row = await PasswordReset.findOne({ where: { email: req.params.email, token: req.params.token }, raw: true });
    if (!row) return res.status(404).json({ message: 'Password reset record not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { email, token, created_at } = req.body;
    if (!email || !token) return res.status(400).json({ message: 'email and token are required' });
    await PasswordReset.create({ email, token, created_at: created_at ?? new Date() });
    res.status(201).json({ message: 'Password reset record created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const { email, token } = req.params;
    const row = await PasswordReset.findOne({ where: { email, token } });
    if (!row) return res.status(404).json({ message: 'Password reset record not found' });
    await row.update(req.body);
    res.json({ message: 'Password reset record updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const { email, token } = req.params;
    const deleted = await PasswordReset.destroy({ where: { email, token } });
    if (!deleted) return res.status(404).json({ message: 'Password reset record not found' });
    res.json({ message: 'Password reset record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
