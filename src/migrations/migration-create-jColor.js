'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colors', {
      colorID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.TEXT,
        // references: {
        //   model: 'doiBongs',
        //   key: 'tenDoiBong'
        // }
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
    await queryInterface.dropTable('Colors');
  }
};