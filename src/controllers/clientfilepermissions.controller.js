// controllers/clientfilepermissions.controller.js
const ClientFilePermission = require("../models/clientfilepermissions");

exports.getAll = async (req, res) => {
  try {
    const rows = await ClientFilePermission.findAll({ raw: true });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await ClientFilePermission.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: "Record not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRow = await ClientFilePermission.create(req.body);
    res.status(201).json({ message: "Record created", id: newRow.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const row = await ClientFilePermission.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: "Record not found" });

    await row.update(req.body);
    res.json({ message: "Record updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const row = await ClientFilePermission.findByPk(req.params.id);
    if (!row) return res.status(404).json({ message: "Record not found" });

    await row.destroy();
    res.json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
