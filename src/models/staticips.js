// models/staticips.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StaticIp = sequelize.define('StaticIp', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ip: {
    type: DataTypes.JSON, // since column has CHECK(json_valid(ip))
    allowNull: false,
  },
  nas_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'staticips',
  timestamps: false, // no created_at / updated_at
});

module.exports = StaticIp;
