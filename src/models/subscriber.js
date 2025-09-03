// models/subscriber.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscriber = sequelize.define('Subscriber', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  actions: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  profile: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  profile_status: {
    type: DataTypes.ENUM('active', 'inactive', 'suspended'),
    defaultValue: 'active',
  },
  expiration: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  packages: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  salesperson: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  due: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  NAS: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  identity: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  department: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'subscribers',
  timestamps: false,
});

module.exports = Subscriber;
