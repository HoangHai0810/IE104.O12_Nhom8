'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedback', {
      feedbackID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(15)
      },
      productID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Product',
          key: 'productID'
        }
      },
      userID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Users',
          key: 'userID'
        }
      },
      content: {
        type: Sequelize.TEXT
      },
      rate: {
        type: Sequelize.TINYINT
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
    await queryInterface.dropTable('feedback');
  }
};