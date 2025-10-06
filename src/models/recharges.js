const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Recharge = sequelize.define('Recharge', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  plan_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  planName: { type: DataTypes.STRING, allowNull: false },
  planinfo_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  planinfo_planName: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false },
  remaningQuantity: { type: DataTypes.TINYINT.UNSIGNED, allowNull: true },
  status: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false },
  startDate: { type: DataTypes.DATE, allowNull: true },
  expiryDate: { type: DataTypes.DATE, allowNull: true },
  suspendTime: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, defaultValue: 0 },
  expiryDetails: { type: DataTypes.JSON, allowNull: true, defaultValue: {} },
  planType: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 1 },
  planCategory: { type: DataTypes.TINYINT.UNSIGNED, allowNull: false, defaultValue: 1 },
  franchiseeCost: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 },
  customerCost: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  agr: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 },
  otts: { type: DataTypes.JSON, allowNull: true, defaultValue: [] },
  operator_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
  zoneName: { type: DataTypes.STRING, allowNull: false },
  createdBy: { type: DataTypes.STRING, allowNull: true },
  updatedBy: { type: DataTypes.STRING, allowNull: true },
  created_at: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
}, {
  tableName: 'recharges',
  timestamps: false
});

module.exports = Recharge;
