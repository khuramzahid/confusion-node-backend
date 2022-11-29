'use strict';
const {
  Model
} = require('sequelize');
var passportLocalSequelize = require('passport-local-sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'hash',
    saltField: 'salt'
  });

  return User;
};