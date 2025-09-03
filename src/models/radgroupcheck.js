// models/radgroupcheck.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RadGroupCheck = sequelize.define('RadGroupCheck', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  groupname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attribute: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  op: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    defaultValue: '==',
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'radgroupcheck',
  timestamps: false,
});

module.exports = RadGroupCheck;
