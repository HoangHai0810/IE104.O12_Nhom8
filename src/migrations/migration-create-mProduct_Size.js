'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_Sizes', {
      sizeID: {
        primaryKey: true,
        type: Sequelize.STRING(5),
        references: {
          model: 'Sizes',
          key: 'sizeID'
        }
      },
      productID: {
        primaryKey: true,
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
    await queryInterface.dropTable('Product_Sizes');
  }
};