const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/orderdetail');

const sequelize = new Sequelize(config.development);

const Ord_Det = UserModel(sequelize, Sequelize.DataTypes);

async function insertDetail()
{
    try
    {
        
        await sequelize.sync();
        const newDT1 = 
        { 
            orderID: 'Ord01',
            productID: 'P001'
        };
        const Dt1 = await Ord_Det.create(newDT1);
        console.log('Dt1 created: ', Dt1.toJSON())
        const newDT2 = 
        { 
            orderID: 'Ord02',
            productID: 'JK001'
        };
        const Dt2 = await Ord_Det.create(newDT2);
        console.log('Dt2 created: ', Dt2.toJSON())
        const newDT3 = 
        { 
            orderID: 'Ord03',
            productID: 'TS002'
        };
        const Dt3 = await Ord_Det.create(newDT3);
        console.log('Dt3 created: ', Dt3.toJSON())
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
insertDetail();