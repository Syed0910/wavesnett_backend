// controllers/whatsappstatuses.controller.js
const WhatsAppStatus = require("../models/whatsappstatuses");

// ✅ Get all
const getAll = async (req, res) => {
  try {
    const statuses = await WhatsAppStatus.findAll();
    res.json(statuses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get by ID
const getById = async (req, res) => {
  try {
    const status = await WhatsAppStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });
    res.json(status);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create
const create = async (req, res) => {
  try {
    const {
      notifytype_id,
      user_id,
      username,
      phone,
      status,
      notifyDate,
      operator_id,
      zoneName,
    } = req.body;

    const newStatus = await WhatsAppStatus.create({
      notifytype_id,
      user_id,
      username,
      phone,
      status,
      notifyDate,
      operator_id,
      zoneName,
    });

    res.status(201).json(newStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update
const update = async (req, res) => {
  try {
    const status = await WhatsAppStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });

    await status.update(req.body);
    res.json(status);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete
const remove = async (req, res) => {
  try {
    const status = await WhatsAppStatus.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Not found" });

    await status.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create, update, remove };
