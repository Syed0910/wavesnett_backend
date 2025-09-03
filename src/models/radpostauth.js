// models/radpostauth.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RadPostAuth = sequelize.define('RadPostAuth', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mac_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nasip: {
    type: DataTypes.STRING(39),
    allowNull: false,
  },
  reply: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  authdate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'radpostauth',
  timestamps: false,
});

module.exports = RadPostAuth;
