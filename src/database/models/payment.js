'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {

    static associate(models) {
      Payment.belongsTo(models.Order, { as: 'orders' })
    }
  };
  Payment.init({
    type: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};