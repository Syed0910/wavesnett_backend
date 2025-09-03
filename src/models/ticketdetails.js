const db = require("../config/database");

// Model functions for ticketdetails
const TicketDetails = {
  // ✅ Get all
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM ticketdetails");
    return rows;
  },

  // ✅ Get by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM ticketdetails WHERE id = ?", [id]);
    return rows[0];
  },

  // ✅ Create new
  create: async (data) => {
    const {
      ticket_id, lotName, username, password, plan_id, planName,
      customerCost, franchiseeCost, tax, total, usedDate, expiryDate,
      simUse, remark, operator_id, zoneName, oldCommissionRate,
      createdBy
    } = data;

    const [result] = await db.query(
      `INSERT INTO ticketdetails 
       (ticket_id, lotName, username, password, plan_id, planName,
        customerCost, franchiseeCost, tax, total, usedDate, expiryDate,
        simUse, remark, operator_id, zoneName, oldCommissionRate, 
        createdBy, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        ticket_id, lotName, username, password, plan_id, planName,
        customerCost, franchiseeCost, tax, total, usedDate, expiryDate,
        simUse, remark, operator_id, zoneName, oldCommissionRate, createdBy
      ]
    );

    return { id: result.insertId, ...data };
  },

  // ✅ Update
  update: async (id, data) => {
    const {
      ticket_id, lotName, username, password, plan_id, planName,
      customerCost, franchiseeCost, tax, total, usedDate, expiryDate,
      simUse, remark, operator_id, zoneName, oldCommissionRate,
      updatedBy
    } = data;

    await db.query(
      `UPDATE ticketdetails 
       SET ticket_id=?, lotName=?, username=?, password=?, plan_id=?, planName=?, 
           customerCost=?, franchiseeCost=?, tax=?, total=?, usedDate=?, expiryDate=?, 
           simUse=?, remark=?, operator_id=?, zoneName=?, oldCommissionRate=?, updatedBy=?, updated_at=NOW()
       WHERE id=?`,
      [
        ticket_id, lotName, username, password, plan_id, planName,
        customerCost, franchiseeCost, tax, total, usedDate, expiryDate,
        simUse, remark, operator_id, zoneName, oldCommissionRate, updatedBy, id
      ]
    );

    return { id, ...data };
  },

  // ✅ Delete
  remove: async (id) => {
    await db.query("DELETE FROM ticketdetails WHERE id=?", [id]);
    return { message: "Ticket detail deleted successfully" };
  },
};

module.exports = TicketDetails;
