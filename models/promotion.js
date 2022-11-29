'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Promotion.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    label: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Promotion',
  });
  return Promotion;
};