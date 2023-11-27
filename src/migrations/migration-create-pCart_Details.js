'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cart_Details', {
            cartID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Orders',
                    key: 'orderID'
                }
            },
            productID: {
                type: Sequelize.STRING(10),
                references: {
                    model: 'Products',
                    key: 'productID'
                }
            },
            soLuong: {
                type: Sequelize.TINYINT,
            },
            thanhTien: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Cart_Details');
    }
};