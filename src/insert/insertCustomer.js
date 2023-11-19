const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/customer');

const sequelize = new Sequelize(config.development);

const ctm = UserModel(sequelize, Sequelize.DataTypes);

async function insertCTM()
{
    try
    {
        await sequelize.sync();
        const newCTM1 = 
        {
           customerID: 'CS001',
           fullName: 'Nguyễn Phú Trung',
           dateOfBirth: '2002-03-28',
           phoneNumber: '0865958707',
           nativeVillage: 'Bến Tre',
           userID: 'ID001'
        };
        const Ctm1 = await ctm.create(newCTM1);
        console.log('Customer_1 created: ', Ctm1.toJSON());
        const newCTM2 = 
        {
           customerID: 'CS002',
           fullName: 'Nguyễn Văn Phong',
           dateOfBirth: '2003-09-05',
           phoneNumber: '0948347245',
           nativeVillage: 'Quảng Trị',
           userID: 'ID002'
        };
        const Ctm2 = await ctm.create(newCTM2);
        console.log('Customer_2 created: ', Ctm2.toJSON());
        const newCTM3 = 
        {
           customerID: 'CS003',
           fullName: 'Lê Quốc Kiệt',
           dateOfBirth: '2003-03-28',
           phoneNumber: '0915716578',
           nativeVillage: 'Bến Tre',
           userID: 'ID003'
        };
        const Ctm3 = await ctm.create(newCTM3);
        console.log('Customer_3 created: ', Ctm3.toJSON());
        const newCTM4 = 
        {
           customerID: 'CS004',
           fullName: 'Lương Quốc Toàn',
           dateOfBirth: '2003-01-22',
           phoneNumber: '0367556243',
           nativeVillage: 'Lâm Đồng',
           userID: 'ID004'
        };
        const Ctm4 = await ctm.create(newCTM4);
        console.log('Customer_4 created: ', Ctm4.toJSON());
        
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
insertCTM();