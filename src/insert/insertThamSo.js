const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/thamso');

const sequelize = new Sequelize(config.development);

const Ts = UserModel(sequelize, Sequelize.DataTypes);

async function insertTS()
{
    try
    {
        await sequelize.sync();
        const newTS1 = 
        {
            tenThamSo: 'Số màu tối thiểu',
            giaTri: '1'
        };
        const TS1 = await Ts.create(newTS1);
        console.log('TS1 created: ', TS1.toJSON());
        const newTS2 = 
        {
            tenThamSo: 'Số lượng size tối thiểu',
            giaTri: '1'
        };
        const TS2 = await Ts.create(newTS2);
        console.log('TS2 created: ', TS2.toJSON());
        const newTS3 = 
        {
            tenThamSo: 'Số sản phẩm tối thiểu trong một loại quần áo',
            giaTri: '3'
        };
        const TS3 = await Ts.create(newTS3);
        console.log('TS3 created: ', TS3.toJSON());
        const newTS4 = 
        {
            tenThamSo: 'Số điểm rate tối thiểu',
            giaTri: '0'
        };
        const TS4 = await Ts.create(newTS4);
        console.log('TS4 created: ', TS4.toJSON());
        const newTS5 = 
        {
            tenThamSo: 'Số điểm rate tối đa',
            giaTri: '10'
        };
        const TS5 = await Ts.create(newTS5);
        console.log('TS5 created: ', TS5.toJSON());
        const newTS6 = 
        {
            tenThamSo: 'maxDiscountValue (%)',
            giaTri: '100'
        };
        const TS6 = await Ts.create(newTS6);
        console.log('TS6 created: ', TS6.toJSON());
        const newTS7 = 
        {
            tenThamSo: 'minDiscountValue (%)',
            giaTri: '0'
        };
        const TS7 = await Ts.create(newTS7);
        console.log('TS7 created: ', TS7.toJSON());
        const newTS8 = 
        {
            tenThamSo: 'phoneNumberCount1',
            giaTri: '7'
        };
        const TS8 = await Ts.create(newTS8);
        console.log('TS8 created: ', TS8.toJSON());
        const newTS9 = 
        {
            tenThamSo: 'phoneNumberCount2',
            giaTri: '10'
        };
        const TS9 = await Ts.create(newTS9);
        console.log('TS9 created: ', TS9.toJSON());
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
insertTS();