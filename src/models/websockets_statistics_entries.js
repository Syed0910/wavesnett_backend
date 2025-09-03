const db = require("../config/database");

// Model functions
const WebsocketStats = {
  // ✅ Get all entries
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM websockets_statistics_entries");
    return rows;
  },

  // ✅ Get entry by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM websockets_statistics_entries WHERE id = ?", [id]);
    return rows[0];
  },

  // ✅ Create new entry
  create: async (data) => {
    const { app_id, peak_connection_count, websocket_message_count, api_message_count } = data;
    const [result] = await db.query(
      `INSERT INTO websockets_statistics_entries 
       (app_id, peak_connection_count, websocket_message_count, api_message_count, created_at, updated_at) 
       VALUES (?, ?, ?, ?, NOW(), NOW())`,
      [app_id, peak_connection_count, websocket_message_count, api_message_count]
    );
    return { id: result.insertId, ...data };
  },

  // ✅ Update entry
  update: async (id, data) => {
    const { app_id, peak_connection_count, websocket_message_count, api_message_count } = data;
    await db.query(
      `UPDATE websockets_statistics_entries 
       SET app_id=?, peak_connection_count=?, websocket_message_count=?, api_message_count=?, updated_at=NOW() 
       WHERE id=?`,
      [app_id, peak_connection_count, websocket_message_count, api_message_count, id]
    );
    return { id, ...data };
  },

  // ✅ Delete entry
  remove: async (id) => {
    await db.query("DELETE FROM websockets_statistics_entries WHERE id=?", [id]);
    return { message: "Entry deleted successfully" };
  },
};

module.exports = WebsocketStats;
