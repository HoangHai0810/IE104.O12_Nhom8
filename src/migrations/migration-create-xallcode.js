'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('allcodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Users',
          key: 'UserID'
        }
      },
      // tenDoiBong: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'doiBongs',
      //     key: 'tenDoiBong'
      //   }
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('allcodes');
  }
};