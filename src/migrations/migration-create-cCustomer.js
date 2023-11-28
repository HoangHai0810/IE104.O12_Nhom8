'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      customerID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.TEXT
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      phoneNumber: {
        type: Sequelize.STRING(10)
      },
      nativeVillage: {
        type: Sequelize.TEXT
      },
      userID: {
        type: Sequelize.INTEGER,
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