// models/naslists.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Naslist = sequelize.define('Naslist', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  nasIp: {
    type: DataTypes.STRING(39),
    allowNull: false,
    unique: true
  },
  nas_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  nasType: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: 'Mikrotik'
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
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
  tableName: 'naslists',
  timestamps: false
});

module.exports = Naslist;
