// models/oltpons.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize"); // adjust path if needed

const Oltpon = sequelize.define("oltpons", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ponId: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
  },
  ponName: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  olt_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  oltIp: {
    type: DataTypes.STRING(39),
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "oltpons",
  timestamps: true,          // enable Sequelize timestamps
  createdAt: "created_at",   // map to DB column
  updatedAt: "updated_at",   // map to DB column
});

module.exports = Oltpon;
