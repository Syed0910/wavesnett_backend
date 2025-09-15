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
    type: DataTypes.STRING(39), // supports IPv4 & IPv6
    allowNull: false,
    unique: true,
  },
  nasType: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: 'Mikrotik',
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'nas',
  timestamps: false, // disables createdAt / updatedAt
});

module.exports = Nas;
