const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/ketqua');

const sequelize = new Sequelize(config.development);

const kq = UserModel(sequelize, Sequelize.DataTypes);

async function insertKQ()
{
    try
    {
        
        await sequelize.sync();
        const newKQ1 = 
        {
            maLich: 1,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq1 = await kq.create(newKQ1);
        
        console.log('KQ1 created: ', Kq1.toJSON());
        const newKQ2 = 
        {
            maLich: 2,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq2 = await kq.create(newKQ2);
        
        console.log('KQ2 created: ', Kq2.toJSON());
        const newKQ3 = 
        {
            maLich: 3,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq3 = await kq.create(newKQ3);
        
        console.log('KQ3 created: ', Kq3.toJSON());
        const newKQ4 = 
        {
            maLich: 4,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq4 = await kq.create(newKQ4);
        
        console.log('KQ4 created: ', Kq4.toJSON());
        const newKQ5 = 
        {
            maLich: 5,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq5 = await kq.create(newKQ5);
        
        console.log('KQ5 created: ', Kq5.toJSON());
        const newKQ6 = 
        {
            maLich: 6,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq6 = await kq.create(newKQ6);
        
        console.log('KQ6 created: ', Kq6.toJSON());
        const newKQ7 = 
        {
            maLich: 7,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq7 = await kq.create(newKQ7);
        
        console.log('KQ7 created: ', Kq7.toJSON());
        const newKQ8 = 
        {
            maLich: 8,
            soBanThangDoi1: 0,
            soBanThangDoi2: 0,
            soTheDo: 0,
            soTheVang: 0   
        };
        const Kq8 = await kq.create(newKQ8);
        console.log('KQ12 created: ', Kq12.toJSON());
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
insertKQ();