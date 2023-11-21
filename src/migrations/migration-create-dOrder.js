'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      orderID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.STRING(10)
      },
      customerID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Customers',
          key: 'customerID'
        }
      },
      status: {
        type: Sequelize.TEXT
      },
      note: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      totalCost: {
        type: Sequelize.INTEGER
      },
      voucherID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Vouchers',
          key: 'voucherID'
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
    await queryInterface.dropTable('Orders');
  }
};