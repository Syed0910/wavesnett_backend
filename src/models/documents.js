// models/documents.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize"); 

const Document = sequelize.define("documents", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documentName: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  documentUrl: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "documents",
  timestamps: false, // since created_at & updated_at exist manually
});

module.exports = Document;
