// models/invoicestatuses.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const InvoiceStatus = sequelize.define(
  "InvoiceStatus",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "invoicestatuses",
    timestamps: false,
  }
);

module.exports = InvoiceStatus;
