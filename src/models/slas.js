// models/slas.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Sla = sequelize.define('Sla', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  slaNo: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slaTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slaMsg: {
    type: DataTypes.STRING,
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
    allowNull: true
  },
  statusDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  assignOperator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  resolveTime: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  oldId: {
    type: DataTypes.BIGINT.UNSIGNED,
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
  tableName: 'slas',
  timestamps: false
});

module.exports = Sla;
