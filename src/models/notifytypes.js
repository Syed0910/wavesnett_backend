// models/notifytypes.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize"); // adjust path if needed

const NotifyType = sequelize.define("notifytypes", {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: "notifytypes",
  timestamps: false, // no created_at / updated_at in table
});

module.exports = NotifyType;
