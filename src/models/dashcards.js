// models/dashcards.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Dashcard = sequelize.define('Dashcard', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  // Table enforces CHECK (json_valid(value)), so keep this as JSON
  value: {
    type: DataTypes.JSON,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'dashcards',
  timestamps: false
});

module.exports = Dashcard;
