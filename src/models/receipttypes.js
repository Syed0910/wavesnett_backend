// models/receipttypes.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const ReceiptType = sequelize.define(
  "ReceiptType",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "receipttypes",
    timestamps: false,
  }
);

module.exports = ReceiptType;
