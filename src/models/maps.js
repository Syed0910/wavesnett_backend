// models/maps.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Map = sequelize.define(
  "Map",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    jdata: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
      validate: {
        isJson(value) {
          try {
            JSON.parse(value);
          } catch (e) {
            throw new Error("jdata must be valid JSON");
          }
        },
      },
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
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
    tableName: "maps",
    timestamps: false,
  }
);

module.exports = Map;
