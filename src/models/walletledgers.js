// models/walletledgers.model.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database"); // adjust if needed

class Walletledger extends Model {}

Walletledger.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    OldOperatorUserId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    operatorUsername: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cr: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    dr: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    commission: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    commissionRate: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "R",
    },
    closingBalance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    franchisee: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    recharge_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    ledgertype_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    ledgerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    operatorpg_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    ledgerDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    sequelize,
    modelName: "Walletledger",
    tableName: "walletledgers", // ✅ plural
    timestamps: false,
    indexes: [
      { fields: ["operator_id"] },
      { fields: ["recharge_id"] },
      { fields: ["ledgertype_id"] },
      { fields: ["operatorpg_id"] },
      { fields: ["ledgerDate"] },
    ],
  }
);

module.export
