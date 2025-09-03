// models/recharges.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Recharge = sequelize.define('Recharge', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plan_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  planName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  planinfo_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  planinfo_planName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false
  },
  remaningQuantity: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true
  },
  status: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  oldExpiry: {
    type: DataTypes.DATE,
    allowNull: true
  },
  changeExpire: {
    type: DataTypes.DATE,
    allowNull: true
  },
  pendingValidity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  suspendDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  suspendTime: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  expiryDetails: {
    type: DataTypes.JSON,
    allowNull: true
  },
  planType: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 1
  },
  planCategory: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true,
    defaultValue: 1
  },
  dataLimit: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true,
    defaultValue: 0
  },
  midNight: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  calenderDate: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  startOnLogin: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  validity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  downBW: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  upBW: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  dayNight: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  nightStart: {
    type: DataTypes.TIME,
    allowNull: true
  },
  nightStop: {
    type: DataTypes.TIME,
    allowNull: true
  },
  nightDownBW: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nightUpBW: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fup: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0
  },
  fupDownBW: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fupUpBW: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  carryForward: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  carryReceiveId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  carryReceiveData: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  totalTopupData: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  topupExpiryDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  topupStartRechargeId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  topupActiveRechargeId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  usedTopup: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  quotaNotify: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  burstLimitUp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  burstLimitDown: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  burstThresholdUp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  burstThresholdDown: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  burstTimeUp: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  burstTimeDown: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  subBurstLimitUp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  subBurstLimitDown: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  subBurstThresholdUp: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  subBurstThresholdDown: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  subBurstTimeUp: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  subBurstTimeDown: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  franchiseeCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customerCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  totDisc: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  totTax: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  agr: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: '0.00'
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  remark: {
    type: DataTypes.TEXT,
    allowNull: true
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
  oldRechId: {
    type: DataTypes.INTEGER,
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
  tableName: 'recharges',
  timestamps: false
});

module.exports = Recharge;
