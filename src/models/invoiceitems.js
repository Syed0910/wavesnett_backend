// models/invoiceitems.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Invoiceitem = sequelize.define('Invoiceitem', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  HSNCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  plan_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  validity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  data: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  dataLimit: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  fup: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  planType: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true
  },
  planCategory: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalDiscount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tax1Rate: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  tax2Rate: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  tax3Rate: {
    type: DataTypes.STRING(3),
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
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
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
  tableName: 'invoiceitems',
  timestamps: false
});

module.exports = Invoiceitem;
