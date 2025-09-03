// models/nasarchives.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Nasarchive = sequelize.define('Nasarchive', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  nasIp: {
    type: DataTypes.STRING(39),
    allowNull: false
  },
  fromDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  toDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: 'nasarchives',
  timestamps: false
});

module.exports = Nasarchive;
