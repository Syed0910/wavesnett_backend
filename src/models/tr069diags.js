const db = require("../config/database");

// Model functions for tr069diags
const Tr069Diags = {
  // ✅ Get all
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM tr069diags");
    return rows;
  },

  // ✅ Get by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM tr069diags WHERE id = ?", [id]);
    return rows[0];
  },

  // ✅ Create new diag
  create: async (data) => {
    const { jdata, operator_id, createdBy } = data;
    const [result] = await db.query(
      `INSERT INTO tr069diags (jdata, operator_id, createdBy, created_at, updated_at) 
       VALUES (?, ?, ?, NOW(), NOW())`,
      [JSON.stringify(jdata), operator_id, createdBy]
    );
    return { id: result.insertId, jdata, operator_id, createdBy };
  },

  // ✅ Update diag
  update: async (id, data) => {
    const { jdata, operator_id, updatedBy } = data;
    await db.query(
      `UPDATE tr069diags 
       SET jdata=?, operator_id=?, updatedBy=?, updated_at=NOW() 
       WHERE id=?`,
      [JSON.stringify(jdata), operator_id, updatedBy, id]
    );
    return { id, jdata, operator_id, updatedBy };
  },

  // ✅ Delete diag
  remove: async (id) => {
    await db.query("DELETE FROM tr069diags WHERE id=?", [id]);
    return { message: "Diag entry deleted successfully" };
  },
};

module.exports = Tr069Diags;
