'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order', {
      orderID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(10)
      },
      customerID: {
        type: Sequelize.STRING(10),
        references: {
          model: 'customer',
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
        type: Sequelize.INT
      },
      voucherID: {
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('order');
  }
};