// controllers/invoiceUserpgController.js
const { sequelize } = require("../loaders/sequelize");

exports.getTaxSummary = async (req, res) => {
  try {
    const [rows] = await sequelize.query(`
      SELECT 
        CONCAT('Inv-', i.invoiceNo) AS invoiceNo,
        i.username,
        COALESCE(up.totalDiscount, i.totalDiscount) AS discount,
        COALESCE(up.tax1, i.tax1) AS IGST,
        COALESCE(up.tax2, i.tax2) AS SGST,
        COALESCE(up.tax3, i.tax3) AS CGST,
        i.total AS totalAmt,
        i.invoiceDate,
        i.zoneName
      FROM invoices i
      LEFT JOIN userpgs up 
            ON i.invoiceNo = up.invoiceNo 
           AND i.user_id = up.user_id
      ORDER BY i.invoiceDate DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching tax summary:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
