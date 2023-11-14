const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Category_Voucher');

const sequelize = new Sequelize(config.development);

const CV = UserModel(sequelize, Sequelize.DataTypes);

async function insertCV()
{
    try
    {
        await sequelize.sync();
        const newCV1 = 
        {
            categoryVoucherID: '11/11',
            categoryVoucherName: 'Lễ độc thân 11/11',
        };
        const Cv1 = await CV.create(newCV1);
        console.log('CV1 created: ', Cv1.toJSON());
        const newCV2 = 
        {
            categoryVoucherID: '14/02',
            categoryVoucherName: 'Lễ tình nhân (Valentine)',
        };
        const Cv2 = await CV.create(newCV2);
        console.log('CV2 created: ', Cv2.toJSON());
        const newCV3 = 
        {
            categoryVoucherID: '24/12',
            categoryVoucherName: 'Lễ giáng sinh (Merry Christmas)',
        };
        const Cv3 = await CV.create(newCV3);
        console.log('CV3 created: ', Cv3.toJSON());
        const newCV4 = 
        {
            categoryVoucherID: 'Shipping',
            categoryVoucherName: 'Phí vận chuyển',
        };
        const Cv4 = await CV.create(newCV4);
        console.log('CV4 created: ', Cv4.toJSON());
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
insertCV();