const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Product');

const sequelize = new Sequelize(config.development);

const Sp = UserModel(sequelize, Sequelize.DataTypes);

async function insertSP()
{
    try
    {
        await sequelize.sync();
        //Product 1: https://ssstutter.com/p/sss-mini-logo-tee
        const newSP1 = 
        {
            productID: 'TS001',
            productName: 'Mini Logo Tee',
            description: 'Áo phông cổ tròn, tay cộc. Bản bo cổ cải tiến 2.8 cm dày dặn. Có chữ "You look good" ở tay áo.',
            material: 'Cotton 250gsm',
            type: 'Loose',
            price: 269000,
            rate: 4,
            discount: 0,
            categoryProductID: 'TS'
        };
        const Sp1 = await Sp.create(newSP1);
        console.log('SP1 created: ', Sp1.toJSON());
    }
    catch(error)
    {
        console.error('Error inserting user:, error');
    }
    finally
    {
        await sequelize.close();
    }
}
insertSP();