const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/feedback');

const sequelize = new Sequelize(config.development);

const FB = UserModel(sequelize, Sequelize.DataTypes);

async function insertFB()
{
    try
    {
        
        await sequelize.sync();
        const newFB1 = 
        { 
            feedbackID: 'FB001',
            productID: 'MTS002',
            userID: '4',
            content: 'Áo mặc tốt, thoải mái, form dáng đẹp như hình ảnh trưng bày.',
            rate: 4.5,
        };
        const Fb1 = await FB.create(newFB1);
        
        console.log('FB1 created: ', Fb1.toJSON());
    }
    catch(error)
    {
        console.error('Error inserting user: error');
    }
    finally
    {
        await sequelize.close();
    }
}
insertFB();