// models/radreply.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Radreply = sequelize.define('Radreply', {
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
    defaultValue: '='
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
  tableName: 'radreply',
  timestamps: false
});

module.exports = Radreply;
