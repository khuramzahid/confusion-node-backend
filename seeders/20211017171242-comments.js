'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        id: 1,
        dishId: 1,
        rating: 5,
        comment: "Imagine all the eatables, living in conFusion!",
        author: "John Lemon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        dishId: 1,
        rating: 4,
        comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        dishId: 1,
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        dishId: 1,
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        dishId: 1,
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        dishId: 2,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        dishId: 2,
        rating: 4,
        comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        dishId: 2,
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        dishId: 2,
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        dishId: 2,
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        dishId: 3,
        rating: 5,
        comment: "Imagine all the eatables, living in conFusion!",
        author: "John Lemon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        dishId: 3,
        rating: 4,
        comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        dishId: 3,
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        dishId: 3,
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        dishId: 3,
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        dishId: 4,
        rating: 5,
        comment: "Imagine all the eatables, living in conFusion!",
        author: "John Lemon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        dishId: 4,
        rating: 4,
        comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        author: "Paul McVites",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        dishId: 4,
        rating: 3,
        comment: "Eat it, just eat it!",
        author: "Michael Jaikishan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        dishId: 4,
        rating: 4,
        comment: "Ultimate, Reaching for the stars!",
        author: "Ringo Starry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        dishId: 4,
        rating: 2,
        comment: "It's your birthday, we're gonna party!",
        author: "25 Cent",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
