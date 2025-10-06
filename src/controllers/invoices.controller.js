const Invoice = require("../models/invoices");

exports.getAll = async (req, res) => {
  try {
    const rows = await Invoice.findAll({
      raw: true,
      attributes: [
        "id",
        "invoiceNo",
        ["invoiceDate", "date"],
        ["username", "name"],
        "discount",
        ["tax1", "igst"],   // alias for IGST
        ["tax2", "sgst"],   // alias for SGST
        ["tax3", "cgst"],   // alias for CGST
        ["total", "totalAmt"],
        ["gstNumber", "gstNumber"],
        ["phone", "phone"],
        ["zoneName", "zone"]
      ],
    });

    res.json(rows);
  } catch (err) {
    console.error("Error fetching invoices:", err);
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
        ["username", "name"],
        "discount",
        ["tax1", "igst"],
        ["tax2", "sgst"],
        ["tax3", "cgst"],
        ["total", "totalAmt"],
        ["gstNumber", "gstNumber"],
        ["phone", "phone"],
        ["zoneName", "zone"]
      ],
    });

    if (!row) return res.status(404).json({ error: "Invoice not found" });

    res.json(row);
  } catch (err) {
    console.error("Error fetching invoice:", err);
    res.status(500).json({ error: err.message });
  }
};

// create / update / delete remain unchanged
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
