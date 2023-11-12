'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      role: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      phoneNumber: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.TEXT
      },
      dateOfBirth: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Users');
  }
};