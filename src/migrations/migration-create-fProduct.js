'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      productID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      productName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      material: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      price:{
        type: Sequelize.BIGINT
      },
      rate:{
        type: Sequelize.FLOAT
      },
      discount:{
        type: Sequelize.TINYINT
      },
      categoryProductID:{
        type: Sequelize.STRING(20),
        references: {
          model: 'Category_Products',
          key: 'categoryProductID'
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
    await queryInterface.dropTable('Products');
  }
};