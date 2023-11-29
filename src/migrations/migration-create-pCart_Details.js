'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cart_Details', {
            cartID: {
                primaryKey: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Carts',
                    key: 'cartID'
                }
            },
            productID: {
                primaryKey: true,
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
            colorID: {
                type: Sequelize.STRING(10),
                references: {
                    model: 'Colors',
                    key: 'colorID'
                }
            },
            sizeID: {
                type: Sequelize.STRING(5),
                references: {
                    model: 'Sizes',
                    key: 'sizeID'
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
        await queryInterface.dropTable('Cart_Details');
    }
};