// models/operatorlogs.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Operatorlog = sequelize.define('Operatorlog', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  operatorId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  operatorUsername: {
    type: DataTypes.STRING,
    allowNull: false
  },
  operationType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  remark: {
    type: DataTypes.STRING,
    allowNull: false
  },
  operationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  changes: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  tableName: 'operatorlogs',
  timestamps: false
});

module.exports = Operatorlog;
