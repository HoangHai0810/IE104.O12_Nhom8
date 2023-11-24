'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cart_Details', {
      cartID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soLuong: {
        type: Sequelize.TINYINT,
      },
      thanhTien: {
        type: Sequelize.BIGINT,
      },
      productID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Products',
          key: 'productID'
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
    await queryInterface.dropTable('Cart_Details');
  }
};