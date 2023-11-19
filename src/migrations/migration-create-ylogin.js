'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logins', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Users',
          key: 'userID'
        }
      },
      role: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Users',
          key: 'role'
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
    await queryInterface.dropTable('Logins');
  }
};
