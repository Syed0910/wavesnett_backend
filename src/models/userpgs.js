// models/userpgs.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize'); // ✅ Destructure correctly


const userpgs = sequelize.define('userpgs', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    invoiceNo: {
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
    plan_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    },
    planName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetPlan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    payFor: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    quantity: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    discount: {
        type: DataTypes.STRING,
        allowNull: true
    },
    totalDiscount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    tax1: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    tax2: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    tax3: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    roundOff: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    outstandingAmount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    totalPayable: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    additionalCharge: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
    },
    paymentGatewayType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    txnId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    extraTxnId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statusDesc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    checkStatus: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    apptoken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    remark: {
        type: DataTypes.STRING,
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
    oldInvTempId: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: 'userpgs',
    timestamps: false
});

module.exports = userpgs;
