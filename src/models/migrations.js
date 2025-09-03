// models/migrations.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Migration = sequelize.define('Migration', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  migration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  batch: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'migrations',
  timestamps: false
});

module.exports = Migration;
