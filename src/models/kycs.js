// models/kycs.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Kyc = sequelize.define('Kyc', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  idProof: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idProofNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  kycInfo: {
    type: DataTypes.JSON,
    allowNull: false
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'kycs',
  timestamps: false
});

module.exports = Kyc;
