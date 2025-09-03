// models/slastatuses.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Slastatus = sequelize.define('Slastatus', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  sla_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusBy: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusMsg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusDate: {
    type: DataTypes.DATEONLY,
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
  tableName: 'slastatuses',
  timestamps: false
});

module.exports = Slastatus;
