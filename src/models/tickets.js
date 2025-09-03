const db = require("../config/database");

// Model functions for tickets
const Tickets = {
  // ✅ Get all tickets
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM tickets");
    return rows;
  },

  // ✅ Get ticket by ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM tickets WHERE id = ?", [id]);
    return rows[0];
  },

  // ✅ Create new ticket
  create: async (data) => {
    const {
      lotName, userLength, passwordLength, plan_id, planName,
      quantity, customerCost, franchiseeCost, tax, total, expiryDate,
      remark, operator_id, zoneName, oldCommissionRate, oldLotId,
      createdBy
    } = data;

    const [result] = await db.query(
      `INSERT INTO tickets 
       (lotName, userLength, passwordLength, plan_id, planName, quantity,
        customerCost, franchiseeCost, tax, total, expiryDate, remark, 
        operator_id, zoneName, oldCommissionRate, oldLotId, createdBy, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        lotName, userLength, passwordLength, plan_id, planName, quantity,
        customerCost, franchiseeCost, tax, total, expiryDate, remark,
        operator_id, zoneName, oldCommissionRate, oldLotId, createdBy
      ]
    );

    return { id: result.insertId, ...data };
  },

  // ✅ Update ticket
  update: async (id, data) => {
    const {
      lotName, userLength, passwordLength, plan_id, planName,
      quantity, customerCost, franchiseeCost, tax, total, expiryDate,
      remark, operator_id, zoneName, oldCommissionRate, oldLotId,
      updatedBy
    } = data;

    await db.query(
      `UPDATE tickets 
       SET lotName=?, userLength=?, passwordLength=?, plan_id=?, planName=?, quantity=?, 
           customerCost=?, franchiseeCost=?, tax=?, total=?, expiryDate=?, remark=?, 
           operator_id=?, zoneName=?, oldCommissionRate=?, oldLotId=?, updatedBy=?, updated_at=NOW()
       WHERE id=?`,
      [
        lotName, userLength, passwordLength, plan_id, planName, quantity,
        customerCost, franchiseeCost, tax, total, expiryDate, remark,
        operator_id, zoneName, oldCommissionRate, oldLotId, updatedBy, id
      ]
    );

    return { id, ...data };
  },

  // ✅ Delete ticket
  remove: async (id) => {
    await db.query("DELETE FROM tickets WHERE id=?", [id]);
    return { message: "Ticket deleted successfully" };
  },
};

module.exports = Tickets;
