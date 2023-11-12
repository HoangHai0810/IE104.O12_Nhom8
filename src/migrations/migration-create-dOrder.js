'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order', {
      orderID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      customerID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'Customer',
          key: 'customerID'
        }
      },
      // customerID: {
      //   type: Sequelize.STRING(10),
      //   references: {
      //     model: 'user',
      //     key: 'userID'
      //   }
      // },
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
          model: 'Voucher',
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
    await queryInterface.dropTable('Order');
  }
};