// models/billbooks.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Billbook = sequelize.define('Billbook', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  prefix: {
    type: DataTypes.STRING(16),
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  startingNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  withTax: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  terms: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  template: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.STRING,
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
  tableName: 'billbooks',
  timestamps: false
});

module.exports = Billbook;
