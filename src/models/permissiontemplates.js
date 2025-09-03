// models/permissiontemplates.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Permissiontemplate = sequelize.define('Permissiontemplate', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  templateName: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  fileperm: {
    type: DataTypes.JSON,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  updatedBy: {
    type: DataTypes.STRING(64),
    allowNull: false
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
  tableName: 'permissiontemplates',
  timestamps: false
});

module.exports = Permissiontemplate;
