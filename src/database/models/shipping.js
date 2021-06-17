'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
  
    static associate(models) {
      Shipping.belongsTo(models.Order, { as: 'orders' })
    }
  };
  Shipping.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};