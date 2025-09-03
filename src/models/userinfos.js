const db = require("../config/database");

const UserInfo = {
  // Get all records
  getAll: () => {
    return db.query("SELECT * FROM userinfos");
  },

  // Get one by ID
  getById: (id) => {
    return db.query("SELECT * FROM userinfos WHERE id = ?", [id]);
  },

  // Create new record
  create: (data) => {
    return db.query("INSERT INTO userinfos SET ?", data);
  },

  // Update existing record
  update: (id, data) => {
    return db.query("UPDATE userinfos SET ? WHERE id = ?", [data, id]);
  },

  // Delete record
  delete: (id) => {
    return db.query("DELETE FROM userinfos WHERE id = ?", [id]);
  },
};

module.exports = UserInfo;
