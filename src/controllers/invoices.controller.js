const Invoice = require("../models/invoices");

exports.getAll = async (req, res) => {
  try {
    const rows = await Invoice.findAll({
      raw: true,
      attributes: [
        "id",
        "invoiceNo",
        ["invoiceDate", "date"],
        ["user_id", "userName"], // alias user_id → userName
        ["username", "name"],
        ["invstatus_id", "status"],
        ["total", "totalAmt"],
        "createdBy",
        ["zoneName", "zone"],
        "receiveAmount",
        "notes",
      ],
    });

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Invoice.findByPk(req.params.id, {
      raw: true,
      attributes: [
        "id",
        "invoiceNo",
        ["invoiceDate", "date"],
        ["user_id", "userName"],
        ["username", "name"],
        ["invstatus_id", "status"],
        ["total", "totalAmt"],
        "createdBy",
        ["zoneName", "zone"],
        "receiveAmount",
        "notes",
      ],
    });

    if (!row) return res.status(404).json({ error: "Invoice not found" });

    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Invoice.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) return res.status(404).json({ error: "Invoice not found" });

    res.json({ message: "Invoice updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Invoice.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) return res.status(404).json({ error: "Invoice not found" });

    res.json({ message: "Invoice deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
