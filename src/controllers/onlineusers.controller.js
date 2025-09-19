// src/controllers/onlineusers.controller.js
const db = require("../config/database");

// ✅ Get Online Users
exports.getOnlineUsers = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        u.id,
        u.username,
        ui.contactPerson AS name,
        ui.phone,
        u.planName,
        u.status,
        u.suspend,
        u.expiryDate,
        u.zoneName
      FROM users u
      LEFT JOIN userinfos ui ON u.id = ui.user_id
      ORDER BY u.username ASC
    `);

    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching online users:", err);
    res.status(500).json({ error: "Failed to fetch online users." });
  }
};
