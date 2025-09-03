const Tickets = require("../models/tickets");

// ✅ Get all
exports.getAllTickets = async (req, res) => {
  try {
    const rows = await Tickets.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get by ID
exports.getTicketById = async (req, res) => {
  try {
    const row = await Tickets.getById(req.params.id);
    if (!row) return res.status(404).json({ message: "Ticket not found" });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create
exports.createTicket = async (req, res) => {
  try {
    const newRow = await Tickets.create(req.body);
    res.status(201).json(newRow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update
exports.updateTicket = async (req, res) => {
  try {
    const updated = await Tickets.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete
exports.deleteTicket = async (req, res) => {
  try {
    const result = await Tickets.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
