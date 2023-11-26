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
            userID: 4,
            content: 'Áo mặc tốt, thoải mái, form dáng đẹp như hình ảnh trưng bày.',
            rate: 4.5,
        };
        const Fb1 = await FB.create(newFB1);
        
        console.log('FB1 created: ', Fb1.toJSON());
        const newFB2 = 
        { 
            feedbackID: 'FB002',
            productID: 'MJK001',
            userID: 5,
            content: 'Áo khoác chần bông này không chỉ chất lượng mà còn thể hiện sự ấm áp và phong cách. Thiết kế slim fit tôn lên đường cong cơ thể mà không làm giảm sự thoải mái. Tính năng như túi ngoại, mũ trùm đầu và dây rút ở lưng tăng thêm tính tiện ích. Đây là sự kết hợp hoàn hảo giữa chất lượng và phong cách cho mùa đông',
            rate: 4.8,
        };
        const Fb2 = await FB.create(newFB2);
        
        console.log('FB2 created: ', Fb2.toJSON());
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