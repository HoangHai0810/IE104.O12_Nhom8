'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      orderID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      customerID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Customers',
          key: 'customerID'
        }
      },
      voucherID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Vouchers',
          key: 'voucherID'
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
        type: Sequelize.FLOAT
      },
      phoneNumber: {
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
    await queryInterface.dropTable('Orders');
  }
};