// models/configs.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Config = sequelize.define('Config', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  value: {
    type: DataTypes.TEXT, // long text supported by DB schema
    allowNull: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.STRING(255),
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
  tableName: 'configs',
  timestamps: false
});

module.exports = Config;