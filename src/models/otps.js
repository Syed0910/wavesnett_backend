const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Otp = sequelize.define("otps", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  identifier: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  validity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  expired: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  no_times_generated: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  no_times_attempted: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  generated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: "otps",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = Otp;
