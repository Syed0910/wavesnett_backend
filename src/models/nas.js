// models/nas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nas = sequelize.define('Nas', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nasName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nasIp: {
    type: DataTypes.STRING(39),
    allowNull: false,
    unique: true,
  },
  apiUsername: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apiPassword: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apiPort: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: true,
  },
  nasType: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: 'Mikrotik',
  },
  connection: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  zoneName: {
    type: DataTypes.STRING,
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
  tableName: 'nas',
  timestamps: false,
});

module.exports = Nas;
