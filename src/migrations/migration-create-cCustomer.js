'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      customerID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      name: {
        type: Sequelize.TEXT
      },
      userID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Users',
          key: 'userID'
        }
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
    await queryInterface.dropTable('Customers');
  }
};