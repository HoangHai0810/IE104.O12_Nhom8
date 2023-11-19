'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vouchers', {
      voucherID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      describe: Sequelize.TEXT,
      expirationDate: Sequelize.INTEGER,
      categoryVoucherID:{
        type: Sequelize.STRING(10),
        references: {
          model: 'Category_Vouchers',
          key: 'categoryVoucherID'
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
    await queryInterface.dropTable('Vouchers');
  }
};