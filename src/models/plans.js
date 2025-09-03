// models/plans.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  planName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  planinfo_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  plangroup_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
    defaultValue: 0
  },
  planGroup: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  planType: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 1
  },
  planCategory: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 1
  },
  franchiseeCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customerCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  commission: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  clientShow: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  hotspotDisplay: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  validity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  addressList: {
    type: DataTypes.JSON,
    allowNull: true
  },
  ipPool: {
    type: DataTypes.STRING,
    allowNull: true
  },
  simUse: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  ottPlanId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ottPlanName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ottValidity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  otts: {
    type: DataTypes.JSON,
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
  oldPlanId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  oldPlanName: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'plans',
  timestamps: false
});

module.exports = Plan;
