// models/password_resets.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const PasswordReset = sequelize.define('PasswordReset', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true // prevent Sequelize from adding an auto 'id' column
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'password_resets',
  timestamps: false
});

module.exports = PasswordReset;
