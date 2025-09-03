// models/operators.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Operator = sequelize.define("operators", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  oldPassword: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  noAccount: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  balance: {
    type: DataTypes.DECIMAL(8, 2),
    defaultValue: 0.0,
  },
  bill: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  commission: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.0,
  },
  resetPassword: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  lat: {
    type: DataTypes.STRING(32),
    allowNull: true,
  },
  long: {
    type: DataTypes.STRING(32),
    allowNull: true,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  allowIp: {
    type: DataTypes.JSON, // stored as JSON (validated in DB)
    allowNull: true,
  },
  oldBalance: {
    type: DataTypes.DECIMAL(8, 2),
    defaultValue: 0.0,
  },
  oldGroupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  oldOpId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  oldCommission: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  separateConfig: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING,
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
}, {
  tableName: "operators",
  timestamps: false, 
});

module.exports = Operator;
