// models/backprocesses.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Backprocess = sequelize.define('Backprocess', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  operationName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  operatorId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  operatorUsername: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  // DB has CHECK (json_valid(message)); keep JSON so only valid JSON is written
  message: {
    type: DataTypes.JSON,
    allowNull: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'backprocesses',
  timestamps: false
});

module.exports = Backprocess;
