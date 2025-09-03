// models/smsstatuses.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const SmsStatus = sequelize.define(
  "SmsStatus",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    notifytype_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    senderId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    notifyDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    operator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    zoneName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "smsstatuses",
    timestamps: false,
  }
);

module.exports = SmsStatus;
