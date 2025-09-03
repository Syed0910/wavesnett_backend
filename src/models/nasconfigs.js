// models/nasconfigs.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Nasconfig = sequelize.define('Nasconfig', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  nas_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  nasIp: {
    type: DataTypes.STRING(39),
    allowNull: false
  },
  value: {
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
  tableName: 'nasconfigs',
  timestamps: false
});

module.exports = Nasconfig;
