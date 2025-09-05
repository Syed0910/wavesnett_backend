const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const UserDetails = sequelize.define("UserDetails", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  planName: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  expiryDate: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  userType: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 1,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  zoneName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fup: {
    type: DataTypes.TINYINT.UNSIGNED,
    defaultValue: null,
  },
  changeplanName: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
}, {
  tableName: "users",
  timestamps: false,
});

module.exports = UserDetails;
