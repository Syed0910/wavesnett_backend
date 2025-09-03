// models/zoneledgers.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Zoneledger = sequelize.define('Zoneledger', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  operatorUsername: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ledgerName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cr: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: '0.00'
  },
  dr: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: '0.00'
  },
  closingBalance: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: '0.00'
  },
  ledgerDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  receiptType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'zoneledgers',
  timestamps: false
});

module.exports = Zoneledger;
