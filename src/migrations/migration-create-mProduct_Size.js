'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_Sizes', {
      sizeID: {
        // primaryKey: true,`
        type: Sequelize.STRING
      },
      productID: {
        type: Sequelize.STRING,
        // references: {
        //   model: 'lichThiDaus',
        //   key: 'maLich'
        // }
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