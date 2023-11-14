'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Category_Vouchers', {
      categoryVoucherID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      categoryVoucherName:{
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Category_Vouchers');
  }
};