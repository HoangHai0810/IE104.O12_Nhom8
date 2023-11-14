const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/order');

const sequelize = new Sequelize(config.development);

const Ord = UserModel(sequelize, Sequelize.DataTypes);

async function insertOrd()
{
    try
    {
        await sequelize.sync();
        const newOrd1 = 
        {
            orderID: 'Ord01',
            customerID: 'CS002',
            status: 'Đang chuẩn bị',
            note: '',
            address: 'Ký túc xá khu B: Đường Mạc Đĩnh Chi, Khu phố Tân Hòa, Phường Đông Hòa, Thành phố Dĩ An, Tỉnh Bình Dương',
            totalCost: 449000,
            voucherID: 'S003'
        };
        const Ord1 = await Ord.create(newOrd1);
        console.log('Ord1 created: ', Ord1.toJSON());
        const newOrd2 = 
        {
            orderID: 'Ord02',
            customerID: 'CS001',
            status: 'Đang vận chuyển',
            note: 'Sẽ đến trong 2 ngày tới',
            address: 'Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh ',
            totalCost: 899000,
            voucherID: 'S002'
        };
        const Ord2 = await Ord.create(newOrd2);
        console.log('Ord2 created: ', Ord2.toJSON());
        const newOrd3 = 
        {
            orderID: 'Ord03',
            customerID: 'CS004',
            status: 'Đã hoàn thành',
            note: 'Đã giao vào lúc 16:00 ngày 13/11/2023 - Người nhận: Lương Quốc Toàn',
            address: 'Ký túc xá khu A: Đường Tạ Quang Bửu, Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh.',
            totalCost: 279000,
        };
        const Ord3 = await Ord.create(newOrd3);
        console.log('Ord3 created: ', Ord3.toJSON());
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
insertOrd();