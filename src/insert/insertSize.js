const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Size');

const sequelize = new Sequelize(config.development);

const Size = UserModel(sequelize, Sequelize.DataTypes);

async function insertSize()
{
    try
    {
        await sequelize.sync();
        const newSize1 = 
        {
            sizeID: 'S01',
            size: 'S',
            gender: 'Man'
        };
        const Ns1 = await Size.create(newSize1);
        console.log('Ns1 created: ', Ns1.toJSON());
        const newSize2 = 
        {
            sizeID: 'XS02',
            size: 'XS',
            gender: 'Woman'
        };
        const Ns2 = await Size.create(newSize2);
        console.log('Ns2 created: ', Ns2.toJSON());
        const newSize3 = 
        {
            sizeID: 'M01',
            size: 'M',
            gender: 'Man',

        };
        const Ns3 = await Size.create(newSize3);
        console.log('Ns3 created: ', Ns3.toJSON());
        const newSize4 = 
        {
            sizeID: 'S02',
            size: 'S',
            gender: 'Woman'
        };
        const Ns4 = await Size.create(newSize4);
        console.log('Ns4 created: ', Ns4.toJSON());
        const newSize5 = 
        {
            sizeID: 'L01',
            size: 'L',
            gender: 'Man'
        };
        const Ns5 = await Size.create(newSize5);
        console.log('Ns5 created: ', Ns5.toJSON());
        const newSize6 = 
        {
            sizeID: 'M02',
            size: 'M',
            gender: 'Woman',
        };
        const Ns6 = await Size.create(newSize6);
        console.log('Ns6 created: ', Ns6.toJSON());
        const newSize7 = 
        {
            sizeID: 'XL01',
            size: 'XL',
            gender: 'Man'
        };
        const Ns7 = await Size.create(newSize7);
        console.log('Ns7 created: ', Ns7.toJSON());
        const newSize8 = 
        {
            sizeID: 'L02',
            size: 'L',
            gender: 'Woman',
        };
        const Ns8 = await Size.create(newSize8);
        console.log('Ns8 created: ', Ns8.toJSON());
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
insertSize();