const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Users');

const sequelize = new Sequelize(config.development);

const US = UserModel(sequelize, Sequelize.DataTypes);

async function insertUS()
{
    try
    {
        await sequelize.sync();
       const newUS1 = 
        {
            userID: 'ID001',
            userName: 'Boo DE',
            userPassword: '12345678',
            role: 'Guest'
          };
        const Us1 = await US.create(newUS1);
        console.log('US1 created: ', Us1.toJSON());
        const newUS2 = 
        {
            userID: 'ID002',
            userName: 'UITerXPhonan',
            userPassword: '88888888',
            role: 'Guest'
        }; 
        const Us2 = await US.create(newUS2);
        console.log('US2 created: ', Us2.toJSON());
        const newUS3 = 
        {
            userID: 'ID003',
            userName: 'odnliubbb',
            userPassword: '12356789',
            role: 'Guest'
        };
        const Us3 = await US.create(newUS3);
        console.log('US3 created: ', Us3.toJSON());
        const newUS4 = 
        {
            userID: 'ID004',
            userName: 'LuveYouu',
            userPassword: '87654321',
            role: 'Guest'
        };
        const Us4 = await US.create(newUS4);
        console.log('US4 created: ', Us4.toJSON());
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
insertUS();