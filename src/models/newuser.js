// models/user.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    oldId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    oldPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    plan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    planName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    changeplan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    changeplanName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    plangroup_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    planGroup: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    postPlan: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    simUse: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    expire: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    fup: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    fupNotify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    quota: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    grace: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    graceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    dataLimit: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    suspend: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    startOnLogin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    taxNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0",
    },
    planCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    mac: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userType: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    bandChange: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    ottSubCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    activeAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    bill: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00,
    },
    openingBalance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00,
    },
    taxable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    zoneName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = User;