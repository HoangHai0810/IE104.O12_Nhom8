'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderdetail', {
      // orderID: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: Sequelize.STRING(10)
      // },
      // productID: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: Sequelize.STRING(10)
      // },
      orderID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'order',
          key: 'orderID'
        }
      },
      productID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'product',
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
    await queryInterface.dropTable('orderdetail');
  }
};