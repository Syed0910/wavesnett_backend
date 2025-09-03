// models/radgroupreply.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RadGroupReply = sequelize.define('RadGroupReply', {
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
    defaultValue: '=',
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'radgroupreply',
  timestamps: false,
});

module.exports = RadGroupReply;
