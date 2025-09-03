// models/phpnastasks.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Phpnastask = sequelize.define('Phpnastask', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  task: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  extra: {
    type: DataTypes.TEXT('long'),
    allowNull: true
  },
  phpnas_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  nasName: {
    type: DataTypes.STRING(17),
    allowNull: false
  },
  work: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  createdBy: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'phpnastasks',
  timestamps: false
});

module.exports = Phpnastask;
