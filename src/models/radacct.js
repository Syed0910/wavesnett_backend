// models/radacct.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const Radacct = sequelize.define('Radacct', {
  radacctid: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  acctsessionid: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  acctuniqueid: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  groupname: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  realm: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  nasipaddress: {
    type: DataTypes.STRING(39),
    allowNull: false
  },
  nasportid: {
    type: DataTypes.STRING(39),
    allowNull: true
  },
  nasporttype: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  acctstarttime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  acctupdatetime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  acctstoptime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  acctinterval: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  acctsessiontime: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  acctauthentic: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  connectinfo_start: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  connectinfo_stop: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  acctinputoctets: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  acctoutputoctets: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  calledstationid: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  callingstationid: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  acctterminatecause: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  servicetype: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  framedprotocol: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  framedipaddress: {
    type: DataTypes.STRING(39),
    allowNull: false
  },
  acctstartdelay: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  acctstopdelay: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  xascendsessionsvrkey: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  quota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  sort: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'radacct',
  timestamps: false
});

module.exports = Radacct;
