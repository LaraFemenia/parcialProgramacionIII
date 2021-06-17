'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Order, {
        as: 'orders', 
        foreignKey: 'userId'
      }),
      
      User.belongsTo(models.Address, { as: 'addresses' }),
      
      User.belongsToMany(models.Rol, {
        as: 'rols',
        through: 'userdasrols' })
    }
   
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    adressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};