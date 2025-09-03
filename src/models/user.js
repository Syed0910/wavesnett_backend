// models/user.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ADD THESE FIELDS IF THEY DON'T EXIST IN YOUR DATABASE
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alternatePhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // EXISTING FIELDS
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oldId: {
      type: DataTypes.INTEGER,
    },
    oldPassword: {
      type: DataTypes.STRING,
    },
    plan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    planName: {
      type: DataTypes.STRING,
    },
    changeplan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    changeplanName: {
      type: DataTypes.STRING,
    },
    plangroup_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      defaultValue: 0,
    },
    planGroup: {
      type: DataTypes.STRING(64),
    },
    postPlan: {
      type: DataTypes.BOOLEAN,
    },
    simUse: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    expire: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    fup: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    fupNotify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    quota: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    grace: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    graceDate: {
      type: DataTypes.DATEONLY,
    },
    dataLimit: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    suspend: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    startOnLogin: {
      type: DataTypes.BOOLEAN,
    },
    portalLogin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    autoInvoice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    autoRenew: {
      type: DataTypes.BOOLEAN,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    expiryDate: {
      type: DataTypes.DATE,
    },
    taxNo: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planCost: {
      type: DataTypes.DECIMAL(10, 2),
    },
    mac: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    bandChange: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    ottSubCode: {
      type: DataTypes.STRING,
    },
    activeAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bill: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    openingBalance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    taxable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    zoneName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'users',
    timestamps: false, // disable default createdAt/updatedAt
    underscored: true, // map created_at instead of createdAt
  }
);

module.exports = User;