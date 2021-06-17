'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
 
    static associate(models) {
      Order.hasMany(models.OrderDetail, {
        as: 'orderDetails', 
        foreignKey: 'orderId'
      }),

      Order.hasOne(models.Shipping,{
        as:'shippings',
        foreignKey: 'orderId'
      }),

      Order.hasOne(models.Payment,{
        as:'payments',
        foreignKey: 'orderId'
      }),

      Order.belongsTo(models.State, { as: 'states' }),

      Order.belongsTo(models.User, { as: 'users' })
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.FLOAT,
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};