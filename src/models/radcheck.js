// models/radcheck.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize'); // <--- destructure sequelize here

const Radcheck = sequelize.define('Radcheck', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  attribute: {
    type: DataTypes.STRING,
    allowNull: false
  },
  op: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    defaultValue: '=='
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: 'radcheck',
  timestamps: false
});

module.exports = Radcheck;
