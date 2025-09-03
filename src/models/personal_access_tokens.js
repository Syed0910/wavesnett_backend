// models/personal_access_tokens.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const PersonalAccessToken = sequelize.define('PersonalAccessToken', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  tokenable_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tokenable_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  abilities: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  last_used_at: {
    type: DataTypes.DATE,
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
  tableName: 'personal_access_tokens',
  timestamps: false
});

module.exports = PersonalAccessToken;
