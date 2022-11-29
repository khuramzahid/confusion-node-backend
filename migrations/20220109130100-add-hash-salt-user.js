'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'hash', {
      allowNull: false,
      type: Sequelize.DataTypes.TEXT('long')
    });
    await queryInterface.addColumn('Users', 'salt', {
      allowNull: false,
      type: Sequelize.DataTypes.STRING
    });
    await queryInterface.removeColumn('Users', 'password');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'hash');
    await queryInterface.removeColumn('Users', 'salt');
    await queryInterface.addColumn('Users', 'password', {
      allowNull: false,
      type: Sequelize.STRING
    });
  }
};