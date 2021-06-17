'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHasRols extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserHasRols.init({
    userId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserHasRols',
  });
  return UserHasRols;
};