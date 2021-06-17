'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
  
    static associate(models) {
      State.hasOne(models.Order,{
        as:'orders',
        foreignKey: 'stateId'
      })
    }
  };
  State.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};