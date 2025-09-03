// models/radusergroup.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RadUserGroup = sequelize.define('RadUserGroup', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'radusergroup',
  timestamps: false,
});

module.exports = RadUserGroup;
