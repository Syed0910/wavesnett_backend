// models/emailstatuses.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Emailstatuses = sequelize.define('Emailstatuses', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  notifytype_id: {
    type: DataTypes.TINYINT.UNSIGNED,
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
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notifyDate: {
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
  }
}, {
  tableName: 'emailstatuses',
  timestamps: false
});

module.exports = Emailstatuses;