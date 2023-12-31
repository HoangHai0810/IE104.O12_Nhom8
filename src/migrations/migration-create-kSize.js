'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sizes', {
      sizeID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(5)
      },
      size: {
        type: Sequelize.TEXT,
      },
      gender: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sizes');
  }
};