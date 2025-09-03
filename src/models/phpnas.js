// models/phpnas.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Phpnas = sequelize.define('Phpnas', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  nasName: {
    type: DataTypes.STRING(17),
    allowNull: true
  },
  shortName: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1
  },
  productName: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  productVersion: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  productManufcture: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  nasIp: {
    type: DataTypes.STRING(39),
    allowNull: true,
    unique: true
  },
  // json_valid(sysinfo) constraint in DB; keep this as JSON to enforce valid JSON
  sysinfo: {
    type: DataTypes.JSON,
    allowNull: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  version: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'phpnas',
  timestamps: false
});

module.exports = Phpnas;
