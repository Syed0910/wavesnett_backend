// models/parentchilds.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Parentchild = sequelize.define('Parentchild', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  // The table uses TEXT. If you plan to store arrays, you can keep TEXT and stringify/parse.
  child_id: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'parentchilds',
  timestamps: false
});

module.exports = Parentchild;
