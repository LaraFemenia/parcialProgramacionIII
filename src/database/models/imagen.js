'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
 
    static associate(models) {
      Imagen.belongsTo(models.Product, { as: 'images' })
    }
  };
  Imagen.init({
    name: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagen',
  });
  return Imagen;
};