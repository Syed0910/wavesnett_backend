// models/filepermissions.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const FilePermission = sequelize.define(
  "FilePermission",
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
    fileperm: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
      validate: {
        isJson(value) {
          try {
            JSON.parse(value);
          } catch (e) {
            throw new Error("fileperm must be valid JSON");
          }
        },
      },
    },
    createdBy: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.STRING(64),
      allowNull: false,
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
    tableName: "filepermissions",
    timestamps: false, // using created_at & updated_at from DB
  }
);

module.exports = FilePermission;
