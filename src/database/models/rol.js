'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
   
    static associate(models) {
      Rol.belongsToMany(models.User, {
        as: 'users',
        through: 'userhasrols' })
    }
  };
  Rol.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};