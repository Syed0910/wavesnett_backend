// models/invoicetypes.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const InvoiceType = sequelize.define(
  "InvoiceType",
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
    tableName: "invoicetypes",
    timestamps: false,
  }
);

module.exports = InvoiceType;
