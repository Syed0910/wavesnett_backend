// models/netdiags.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Netdiag = sequelize.define('Netdiag', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  jdata: {
    // Because the table enforces json_valid(jdata), use JSON to store an object/array
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
  tableName: 'netdiags',
  timestamps: false
});

module.exports = Netdiag;
