'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('recipeManager', [
      {
        title: 'Pasta Carbonara',
        description: 'Classic Italian pasta dish with bacon, eggs, and cheese.',
        ingredients: 'Spaghetti, bacon, eggs, Parmesan cheese, black pepper',
        instructions: '1. Cook spaghetti until al dente. 2. Fry bacon until crispy. 3. Beat eggs and mix with grated Parmesan cheese. 4. Drain cooked spaghetti and mix with bacon. 5. Pour egg and cheese mixture over pasta and toss well. 6. Season with black pepper and serve.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recipeManager', null, {});
  },
};