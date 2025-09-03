// models/onumacs.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const OnuMac = sequelize.define("onumacs", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  mac: {
    type: DataTypes.STRING(17),
    allowNull: false,
  },
  olt_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  oltName: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  ponId: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
  },
  ponName: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: "onumacs",
  timestamps: false, 
});

module.exports = OnuMac;
