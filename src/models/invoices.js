// models/invoices.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  prefix: {
    type: DataTypes.STRING(16),
    allowNull: true
  },
  billbook_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  invoiceNo: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  recharge_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  invoiceFor: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  invstatus_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  totalDiscount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tax1: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tax2: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tax3: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  roundOff: {
    type: DataTypes.DECIMAL(4, 3),
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  receiveAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  agr: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: '0.00'
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  invoiceDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  oldInvId: {
    type: DataTypes.INTEGER.UNSIGNED,
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
  tableName: 'invoices',
  timestamps: false
});

module.exports = Invoice;
