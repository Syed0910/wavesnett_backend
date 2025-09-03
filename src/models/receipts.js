// models/receipts.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Receipt = sequelize.define('Receipt', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  receiptNo: {
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
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  receipttype_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: true
  },
  receiptDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  userpg_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  oldPayId: {
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
  tableName: 'receipts',
  timestamps: false
});

module.exports = Receipt;
