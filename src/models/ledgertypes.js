// models/ledgertypes.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Ledgertype = sequelize.define('Ledgertype', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'ledgertypes',
  timestamps: false
});

module.exports = Ledgertype;
