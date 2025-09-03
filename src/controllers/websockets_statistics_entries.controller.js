const WebsocketStats = require("../models/websockets_statistics_entries");

// ✅ Get all entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await WebsocketStats.getAll();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await WebsocketStats.getById(req.params.id);
    if (!entry) return res.status(404).json({ message: "Entry not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create entry
exports.createEntry = async (req, res) => {
  try {
    const newEntry = await WebsocketStats.create(req.body);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update entry
exports.updateEntry = async (req, res) => {
  try {
    const updatedEntry = await WebsocketStats.update(req.params.id, req.body);
    res.json(updatedEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete entry
exports.deleteEntry = async (req, res) => {
  try {
    const result = await WebsocketStats.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
