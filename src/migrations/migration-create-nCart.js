'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      cartID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.STRING(20)
      },
      soLuong: {
        type: Sequelize.TINYINT,
      },
      thanhTien: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Carts');
  }
};