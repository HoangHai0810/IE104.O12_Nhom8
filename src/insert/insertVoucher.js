// insertUser.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Voucher');

// Initialize Sequelize with the configuration
const sequelize = new Sequelize(config.development);

// Define the User model
const VC = UserModel(sequelize, Sequelize.DataTypes);

// Insert a new user into the database
async function insertVC() {
    try {
        await sequelize.sync(); // Ensure the table is created
        const newVC1 = {
            voucherID: 'VC001',
            describe: 'Giảm 211K đơn từ 1499K.',
            expirationDate: 15,
            categoryVoucherID: '11/11'
        };
        const Vc1 = await VC.create(newVC1);
        console.log('Vc1 created:', Vc1.toJSON());
        const newVC2 = {
            voucherID: 'VC002',
            describe: 'Giảm 111K đơn từ 999K.',
            expirationDate: 15,
            categoryVoucherID: '11/11'
        };
        const Vc2 = await VC.create(newVC2);
        console.log('Vc2 created:', Vc2.toJSON());
        const newVC3 = {
            voucherID: 'VC003',
            describe: 'Giảm 20% giá trị đơn hàng từ 1000K.',
            expirationDate: 15,
            categoryVoucherID: '11/11'
        };
        const Vc3 = await VC.create(newVC3);
        console.log('Vc3 created:', Vc3.toJSON());
        const newVC4 = {
            voucherID: 'S001',
            describe: 'Miễn phí vận chuyển với đơn hàng trên 1000K trong phạm vi 3km.',
            expirationDate: 10,
            categoryVoucherID: 'Shipping'
        };
        const Vc4 = await VC.create(newVC4);
        console.log('Vc4 created:', Vc4.toJSON());
        const newVC5 = {
            voucherID: 'S002',
            describe: 'Giảm 50% phí vận chuyển với đơn hàng trên 500K trong phạm vi 3km',
            expirationDate: 10,
            categoryVoucherID: 'Shipping'
        };
        const Vc5 = await VC.create(newVC5);
        console.log('Vc5 created:', Vc5.toJSON());
        const newVC6 = {
            voucherID: 'S003',
            describe: 'Giảm 20% phí vận chuyển với đơn hàng trên 300K trong phạm vi 3km',
            expirationDate: 10,
            categoryVoucherID: 'Shipping'
        };
        const Vc6 = await VC.create(newVC6);
        console.log('Vc6 created:', Vc6.toJSON());
    } catch (error) {
        console.error('Error inserting user:', error);
    } finally {
        await sequelize.close(); // Close the database connection
    }
}

insertVC();
