// models/olts.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Olt = sequelize.define("olts", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  oltName: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  oltIp: {
    type: DataTypes.STRING(39),
    allowNull: false,
  },
  oltUser: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  oltPort: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  oltPass: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  oltConfPass: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  oltType: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  zoneName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  lat: {
    type: DataTypes.STRING(32),
    allowNull: true,
  },
  long: {
    type: DataTypes.STRING(32),
    allowNull: true,
  },
  oldOltId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING,
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
  tableName: "olts",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = Olt;
