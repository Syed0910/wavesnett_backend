const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const Ott = sequelize.define("otts", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ottPlanId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ottPlanName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ottValidity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  otts: {
    type: DataTypes.JSON, // stored as longtext with JSON check
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  msg: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ottResponse: {
    type: DataTypes.JSON, // stored as longtext with JSON check
    allowNull: true,
  },
  ottType: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  recharge_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  zoneName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING(255),
    allowNull: false,
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
}, {
  tableName: "otts",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = Ott;
