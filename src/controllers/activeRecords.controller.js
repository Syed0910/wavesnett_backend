// src/controllers/activeRecords.controller.js
const { QueryTypes } = require("sequelize");
const sequelize = require("../config/database");

// format seconds into H:M:S
const formatUsedTime = (seconds) => {
  if (!seconds) return "0s";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

exports.getActiveRecords = async (req, res) => {
  try {
    const rows = await sequelize.query(
      `
      SELECT 
        u.username,
        u.planName,
        p.validity,
        u.startDate AS startDate,
        TIMESTAMPDIFF(SECOND, u.startDate, NOW()) AS usedSeconds,
        u.expiryDate AS expDate,
        u.zoneName AS zone,
        CASE WHEN u.status = 1 THEN 'Enable' ELSE 'Disable' END AS status,
        'Active' AS account
      FROM users u
      LEFT JOIN plans p ON u.plan_id = p.id
      WHERE u.status = 1
      `,
      { type: QueryTypes.SELECT }
    );

    const formatted = rows.map((r, i) => ({
      id: i + 1, // ✅ unique key for React
      username: r.username,
      planName: r.planName,
      validity: r.validity,
      startDate: r.startDate,
      usedTime: formatUsedTime(r.usedSeconds),
      expDate: r.expDate,
      zone: r.zone,
      status: r.status,
      account: r.account,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("❌ SQL error in getActiveRecords:", err);
    res.status(500).json({ error: err.message });
  }
};
