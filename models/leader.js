'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Leader.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    designation: DataTypes.STRING,
    abbr: DataTypes.STRING,
    description: DataTypes.STRING,
    featured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Leader',
  });
  return Leader;
};