'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_Colors', {
      productID: {
        primaryKey: true,
        type: Sequelize.STRING(10),
        references: {
          model: 'Products',
          key: 'productID'
        }
      },
      colorID: {
        primaryKey: true,
        type: Sequelize.STRING(20),
        references: {
          model: 'Colors',
          key: 'colorID'
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
    await queryInterface.dropTable('Product_Colors');
  }
};