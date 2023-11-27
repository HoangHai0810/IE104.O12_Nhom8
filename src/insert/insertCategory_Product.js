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
            categoryProductID: 'MTS',
            type: 'T-shirt',
            gender: 'Man'
        };
        const Cp1 = await CP.create(newCP1);
        console.log('Cp1 created: ', Cp1.toJSON());
        const newCP2 = 
        {
            categoryProductID: 'MJK',
            type: 'Jacket',
            gender: 'Man',
        };
        const Cp2 = await CP.create(newCP2);
        console.log('Cp2 created: ', Cp2.toJSON());
        const newCP3 = 
        {
            categoryProductID: 'MK',
            type: 'Khaki',
            gender: 'Man',
        };
        const Cp3 = await CP.create(newCP3);
        console.log('Cp3 created: ', Cp3.toJSON());
        const newCP4 = 
        {
            categoryProductID: 'MJ',
            type: 'Jeans',
            gender: 'Man',
        };
        const Cp4 = await CP.create(newCP4);
        console.log('Cp4 created: ', Cp4.toJSON());
        const newCP5 = 
        {
            categoryProductID: 'MSS',
            type: 'Sweat Shirt',
            gender: 'Man',
        };
        const Cp5 = await CP.create(newCP5);
        console.log('Cp5 created: ', Cp5.toJSON());
        const newCP6 = 
        {
            categoryProductID: 'MTT',
            type: 'Tank Top',
            gender: 'Man'
        };
        const Cp6 = await CP.create(newCP6);
        console.log('Cp6 created: ', Cp6.toJSON());
        const newCP7 = 
        {
            categoryProductID: 'MSP',
            type: 'Shorts',
            gender: 'Man'
        };
        const Cp7 = await CP.create(newCP7);
        console.log('Cp7 created: ', Cp7.toJSON());
        const newCP8 = 
        {
            categoryProductID: 'MU',
            type: 'Underwear',
            gender: 'Man'
        };
        const Cp8 = await CP.create(newCP8);
        console.log('Cp8 created: ', Cp8.toJSON());
        //Nữ: 10 - 20; 30 - 40; 50 - 60,...
        const newCP10 = 
        {
            categoryProductID: 'WJK',
            type: 'Jacket',
            gender: 'Woman',
        };
        const Cp10 = await CP.create(newCP10);
        console.log('Cp10 created: ', Cp10.toJSON());
        const newCP11 = 
        {
            categoryProductID: 'WDr',
            type: 'Dress',
            gender: 'Woman',
        };
        const Cp11 = await CP.create(newCP11);
        console.log('Cp11 created: ', Cp11.toJSON());
        const newCP12 = 
        {
            categoryProductID: 'WS',
            type: 'Shirt',
            gender: 'Woman',
        };
        const Cp12 = await CP.create(newCP12);
        console.log('Cp12 created: ', Cp12.toJSON());
        const newCP13 = 
        {
            categoryProductID: 'WTS',
            type: 'T-Shirt',
            gender: 'Woman',
        };
        const Cp13 = await CP.create(newCP13);
        console.log('Cp13 created: ', Cp13.toJSON());
        const newCP14 = 
        {
            categoryProductID: 'WJ',
            type: 'Jeans',
            gender: 'Woman',
        };
        const Cp14 = await CP.create(newCP14);
        console.log('Cp14 created: ', Cp14.toJSON());
        const newCP15 = 
        {
            categoryProductID: 'WSP',
            type: 'Shorts',
            gender: 'Woman',
        };
        const Cp15 = await CP.create(newCP15);
        console.log('Cp15 created: ', Cp15.toJSON());
        const newCP16 = 
        {
            categoryProductID: 'WP',
            type: 'Pants',
            gender: 'Woman',
        };
        const Cp16 = await CP.create(newCP16);
        console.log('Cp16 created: ', Cp16.toJSON());
        const newCP17 =
        {
            categoryProductID: 'WAP',
            type: 'Auth Pants',
            gender: 'Woman',
        };
        const Cp17 = await CP.create(newCP17);
        console.log('Cp17 created: ', Cp17.toJSON());

        
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