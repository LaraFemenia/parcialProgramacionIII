'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {

    static associate(models) {
      OrderDetail.belongsTo(models.Product, { as: 'products' }),
      
      OrderDetail.belongsTo(models.Order, { as: 'orders' })
    }
  };
  OrderDetail.init({
    quality: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT,
    ordenId: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};