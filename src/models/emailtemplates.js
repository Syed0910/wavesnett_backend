// src/models/emailtemplates.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/sequelize');

const EmailTemplate = sequelize.define(
  'EmailTemplate',
  {
    id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    html: { type: DataTypes.TEXT, allowNull: false },
    css: { type: DataTypes.TEXT, allowNull: false },
    components: { type: DataTypes.TEXT, allowNull: false },
    style: { type: DataTypes.TEXT, allowNull: false },
    notifytype_id: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false },
    notifyName: { type: DataTypes.STRING, allowNull: false },
    remark: { type: DataTypes.STRING, allowNull: true },
    operator_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: false },
    zoneName: { type: DataTypes.STRING, allowNull: false },
    createdBy: { type: DataTypes.STRING, allowNull: true },
    updatedBy: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true },
  },
  { tableName: 'emailtemplates', timestamps: false }
);

module.exports = EmailTemplate;