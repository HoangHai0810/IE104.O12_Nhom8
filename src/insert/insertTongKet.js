const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/tongket');

const sequelize = new Sequelize(config.development);

const tk = UserModel(sequelize, Sequelize.DataTypes);

async function insertTK()
{
    try
    {
        
        await sequelize.sync();
        const newTK1 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            soTranDau: 0,
            soTranThang: 0,
            soTranHoa: 0,
            soTranThua: 0,
            soTheVang: 0,
            soTheDo: 0,
            hieuSo: 0,
            diemSo: 0
        };
        const Tk1 = await tk.create(newTK1);
        
        console.log('TK1 created: ', Tk1.toJSON());
        const newTK2 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            soTranDau: 0,
            soTranThang: 0,
            soTranHoa: 0,
            soTranThua: 0,
            soTheVang: 0,
            soTheDo: 0,
            hieuSo: 0,
            diemSo: 0
        };
        const Tk2 = await tk.create(newTK2);
        
        console.log('TK2 created: ', Tk2.toJSON());
        const newTK3 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            soTranDau: 0,
            soTranThang: 0,
            soTranHoa: 0,
            soTranThua: 0,
            soTheVang: 0,
            soTheDo: 0,
            hieuSo: 0,
            diemSo: 0
        };
        const Tk3 = await tk.create(newTK3);
        
        console.log('TK3 created: ', Tk3.toJSON());
        
        const newTK4 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            soTranDau: 0,
            soTranThang: 0,
            soTranHoa: 0,
            soTranThua: 0,
            soTheVang: 0,
            soTheDo: 0,
            hieuSo: 0,
            diemSo: 0
        };
        const Tk4 = await tk.create(newTK4);
        console.log('TK4 created: ', Tk4.toJSON());
        
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
insertTK();