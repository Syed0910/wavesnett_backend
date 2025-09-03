const db = require("../config/database");

// Model functions for wallgardens
const WallGardens = {
  // ✅ Get all records
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM wallgardens");
    return rows;
  },

  // ✅ Get by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM wallgardens WHERE id = ?", [id]);
    return rows[0];
  },

  // ✅ Create new record
  create: async (data) => {
    const { phpnas_id, ipDomain, createdBy } = data;
    const [result] = await db.query(
      `INSERT INTO wallgardens (phpnas_id, ipDomain, createdBy, created_at) 
       VALUES (?, ?, ?, NOW())`,
      [phpnas_id, ipDomain, createdBy]
    );
    return { id: result.insertId, ...data };
  },

  // ✅ Update record
  update: async (id, data) => {
    const { phpnas_id, ipDomain, createdBy } = data;
    await db.query(
      `UPDATE wallgardens 
       SET phpnas_id=?, ipDomain=?, createdBy=? 
       WHERE id=?`,
      [phpnas_id, ipDomain, createdBy, id]
    );
    return { id, ...data };
  },

  // ✅ Delete record
  remove: async (id) => {
    await db.query("DELETE FROM wallgardens WHERE id=?", [id]);
    return { message: "Wallgarden entry deleted successfully" };
  },
};

module.exports = WallGardens;
