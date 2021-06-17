'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // belongsTo
      Product.belongsTo(models.Brand, { as: 'brands' }),
      Product.belongsTo(models.Category, { as: 'categories' }),
      Product.belongsTo(models.Size, { as: 'sizes' }),
      Product.belongsTo(models.Gender, { as: 'genders' }),
      
      Product.hasMany(models.Imagen, {
        as: 'images', 
        foreignKey: 'productId'
      }),

      Product.hasOne(models.OrderDetail,{
        as:'orderDetails',
        foreignKey: 'productId'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    keywords: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};