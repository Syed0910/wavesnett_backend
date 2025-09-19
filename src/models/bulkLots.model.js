const pool = require("../config/database");

async function getBulkLots() {
  const query = `
    SELECT 
      CONCAT('BULK_LOT_', COALESCE(u.plan_id, 'NA')) AS lotName,
      AVG(CHAR_LENGTH(u.username)) AS usernameLength,
      AVG(CHAR_LENGTH(u.password)) AS passwordLength,
      u.planName AS planName,
      COUNT(u.id) AS users,
      MAX(u.expiryDate) AS expDate,
      MIN(u.created_at) AS createDate,
      u.zoneName AS zone
    FROM users u
    GROUP BY u.plan_id, u.planName, u.zoneName
    ORDER BY createDate DESC;
  `;

  const [rows] = await pool.query(query);

  return rows.map((row) => ({
    lotName: row.lotName,
    usernameLength: Math.round(row.usernameLength || 0),
    passwordLength: Math.round(row.passwordLength || 0),
    planName: row.planName,
    users: Number(row.users || 0),
    expDate: row.expDate ? new Date(row.expDate).toISOString().split("T")[0] : null,
    createDate: row.createDate ? new Date(row.createDate).toISOString().split("T")[0] : null,
    zone: row.zone,
  }));
}

module.exports = { getBulkLots };
