// models/clientfilepermissions.js
const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize").sequelize;

const ClientFilePermission = sequelize.define(
  "ClientFilePermission",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
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
    tableName: "clientfilepermissions",
    timestamps: false, // already have created_at/updated_at
  }
);

module.exports = ClientFilePermission;
