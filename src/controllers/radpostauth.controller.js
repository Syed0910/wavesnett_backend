// controllers/radpostauth.controller.js
const RadPostAuth = require("../models/radpostauth");

// ✅ Get all records
exports.getAllRadPostAuth = async (req, res) => {
  try {
    const records = await RadPostAuth.findAll({
      order: [["authdate", "DESC"]], // latest first
    });
    res.json(records);
  } catch (error) {
    console.error("❌ Error fetching radpostauth:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get by ID
exports.getRadPostAuthById = async (req, res) => {
  try {
    const record = await RadPostAuth.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "RadPostAuth not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Create new record
exports.createRadPostAuth = async (req, res) => {
  try {
    const record = await RadPostAuth.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update record
exports.updateRadPostAuth = async (req, res) => {
  try {
    const record = await RadPostAuth.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "RadPostAuth not found" });

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete record
exports.deleteRadPostAuth = async (req, res) => {
  try {
    const record = await RadPostAuth.findByPk(req.params.id);
    if (!record) return res.status(404).json({ error: "RadPostAuth not found" });

    await record.destroy();
    res.json({ message: "RadPostAuth deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
