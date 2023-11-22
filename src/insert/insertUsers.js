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
<<<<<<< HEAD
        };
=======
          };
>>>>>>> 4683b7231427a0510d42993dcc812bcc8c8c2660
        const Us1 = await US.create(newUS1);
        console.log('US1 created: ', Us1.toJSON());
        const newUS2 = 
        {
            userID: 'ID002',
            userName: 'UITerXPhonan',
            userPassword: '88888888',
            role: 'Guest'
<<<<<<< HEAD
        };
=======
        }; 
>>>>>>> 4683b7231427a0510d42993dcc812bcc8c8c2660
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
        const newUS5 = 
        {
            userID: 'ID005',
            userName: 'haianhtest',
            userPassword: '11111111',
            role: 'Admin'
        };
        const Us5 = await US.create(newUS5);
        console.log('US5 created: ', Us5.toJSON());
        const newUS6 = 
        {
            userID: 'ID006',
            userName: 'builetrongduc',
            userPassword: '11111111',
            role: 'Employee'
        };
        const Us6 = await US.create(newUS6);
        console.log('US6 created: ', Us6.toJSON());
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