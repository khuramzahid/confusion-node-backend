'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Promotions', [
      {
        id: 1,
        name: "Weekend Grand Buffet",
        image: "images/buffet.png",
        label: "New",
        price: 19.99,
        featured: true,
        description: "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Promotions', null, {});
  }
};
