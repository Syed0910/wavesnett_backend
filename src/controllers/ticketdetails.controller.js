const TicketDetails = require("../models/ticketdetails");

// ✅ Get all
exports.getAllTicketDetails = async (req, res) => {
  try {
    const rows = await TicketDetails.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get by ID
exports.getTicketDetailById = async (req, res) => {
  try {
    const row = await TicketDetails.getById(req.params.id);
    if (!row) return res.status(404).json({ message: "Ticket detail not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create
exports.createTicketDetail = async (req, res) => {
  try {
    const newRow = await TicketDetails.create(req.body);
    res.status(201).json(newRow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update
exports.updateTicketDetail = async (req, res) => {
  try {
    const updated = await TicketDetails.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete
exports.deleteTicketDetail = async (req, res) => {
  try {
    const result = await TicketDetails.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
