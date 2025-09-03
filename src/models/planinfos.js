// models/planinfos.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PlanInfo = sequelize.define(
  "PlanInfo",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    planName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    planType: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    planCategory: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    dataLimit: {
      type: DataTypes.TINYINT.UNSIGNED,
      defaultValue: 0,
    },
    midNight: {
      type: DataTypes.BOOLEAN,
    },
    calenderDate: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    startOnLogin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    downBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    upBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    dayNight: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    nightStart: {
      type: DataTypes.TIME,
    },
    nightStop: {
      type: DataTypes.TIME,
    },
    nightDownBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    nightUpBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    fup: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    fupDownBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    fupUpBW: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    data: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    carryForward: {
      type: DataTypes.BOOLEAN,
    },
    expiryDate: {
      type: DataTypes.DATEONLY,
    },
    burstLimitUp: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    burstLimitDown: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    burstThresholdUp: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    burstThresholdDown: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    burstTimeUp: {
      type: DataTypes.SMALLINT,
    },
    burstTimeDown: {
      type: DataTypes.SMALLINT,
    },
    subBurstLimitUp: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    subBurstLimitDown: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    subBurstThresholdUp: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    subBurstThresholdDown: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    subBurstTimeUp: {
      type: DataTypes.SMALLINT,
    },
    subBurstTimeDown: {
      type: DataTypes.SMALLINT,
    },
    oldPlanId: {
      type: DataTypes.STRING(255),
    },
    oldPlanName: {
      type: DataTypes.STRING(255),
    },
    createdBy: {
      type: DataTypes.STRING(255),
    },
    updatedBy: {
      type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "planinfos",
    timestamps: false,
  }
);

module.exports = PlanInfo;
