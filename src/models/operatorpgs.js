const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const OperatorPg = sequelize.define("operatorpgs", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  invoiceNo: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  operator_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  oldOperatorUserId: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  totalPayable: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  additionalCharge: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true,
  },
  paymentGatewayType: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  txnId: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  extraTxnId: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  statusDesc: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  checkStatus: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  remark: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  oldInvTempId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: "operatorpgs",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

module.exports = OperatorPg;
