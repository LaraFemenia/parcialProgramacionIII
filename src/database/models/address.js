'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
 
    static associate(models) {
      Address.hasOne(models.User,{
        as:'users',
        foreignKey: 'adressId'
      })
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};