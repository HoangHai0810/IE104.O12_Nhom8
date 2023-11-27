'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Category_Products', {
      categoryProductID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      gender: {
        type: Sequelize.TEXT,
      },
      type:{
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
    await queryInterface.dropTable('Category_Products');
  }
};