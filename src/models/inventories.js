// models/inventories.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Inventory = sequelize.define(
  "Inventory",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    deviceId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mac: {
      type: DataTypes.STRING(17),
      allowNull: false,
      unique: true,
    },
    serialNumber: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    brandName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    tr069: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    extra: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
      validate: {
        isJson(value) {
          if (value) {
            try {
              JSON.parse(value);
            } catch (e) {
              throw new Error("extra must be valid JSON");
            }
          }
        },
      },
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    zoneName: {
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
    tableName: "inventories",
    timestamps: false,
  }
);

module.exports = Inventory;
