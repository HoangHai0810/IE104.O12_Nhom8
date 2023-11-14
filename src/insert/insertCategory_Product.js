const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Category_Product');

const sequelize = new Sequelize(config.development);

const CP = UserModel(sequelize, Sequelize.DataTypes);

async function insertCP()
{
    try
    {
        await sequelize.sync();
        //Nam
        const newCP1 = 
        {
            categoryProductID: 'TS',
            categoryProductName: 'T-shirt',
            gender: 'Man'
        };
        const Cp1 = await CP.create(newCP1);
        console.log('Cp1 created: ', Cp1.toJSON());
        const newCP2 = 
        {
            categoryProductID: 'JK',
            categoryProductName: 'Jacket',
            gender: 'Man',
        };
        const Cp2 = await CP.create(newCP2);
        console.log('Cp2 created: ', Cp2.toJSON());
        const newCP3 = 
        {
            categoryProductID: 'P',
            categoryProductName: 'Pant',
            gender: 'Man',
        };
        const Cp3 = await CP.create(newCP3);
        console.log('Cp3 created: ', Cp3.toJSON());
        const newCP4 = 
        {
            categoryProductID: 'J',
            categoryProductName: 'Jeans',
            gender: 'Man',
        };
        const Cp4 = await CP.create(newCP4);
        console.log('Cp4 created: ', Cp4.toJSON());
        const newCP5 = 
        {
            categoryProductID: 'SS',
            categoryProductName: 'Sweet Shirt',
            gender: 'Man',
        };
        const Cp5 = await CP.create(newCP5);
        console.log('Cp5 created: ', Cp5.toJSON());
        //Nữ: 10 - 20; 30 - 40; 50 - 60,...
        const newCP10 = 
        {
            categoryProductID: 'JK*',
            categoryProductName: 'Jacket',
            gender: 'Woman',
        };
        const Cp10 = await CP.create(newCP10);
        console.log('Cp10 created: ', Cp10.toJSON());
        const newCP11 = 
        {
            categoryProductID: 'Dr',
            categoryProductName: 'Dress',
            gender: 'Woman',
        };
        const Cp11 = await CP.create(newCP11);
        console.log('Cp11 created: ', Cp11.toJSON());
        
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
insertCP();