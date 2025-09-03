// src/models/Vouchers.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database"); // adjust if needed

class Voucher extends Model {}

Voucher.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lotNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plan_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    planName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    franchiseeCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    customerCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    totalTax: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    commission: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    usedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    generic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    zoneName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Vouchers",
    tableName: "vouchers",
    timestamps: false, // only created_at exists
    indexes: [
      { fields: ["secret"] },
      { fields: ["plan_id"] },
      { fields: ["usedDate"] },
      { fields: ["operator_id"] },
    ],
  }
);

module.exports = Voucher;
