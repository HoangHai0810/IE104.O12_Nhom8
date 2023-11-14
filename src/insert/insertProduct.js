const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Product');

const sequelize = new Sequelize(config.development);

const Sp = UserModel(sequelize, Sequelize.DataTypes);

async function insertSP()
{
    try
    {
        await sequelize.sync();
        //Product 1: https://ssstutter.com/p/sss-mini-logo-tee
        const newSP1 = 
        {
            productID: 'TS001',
            productName: 'Mini Logo Tee',
            description: 'Áo phông cổ tròn, tay cộc. Bản bo cổ cải tiến 2.8 cm dày dặn. Có chữ "You look good" ở tay áo.',
            material: 'Cotton 250gsm',
            type: 'Loose',
            price: 269000,
            rate: 4,
            discount: 0,
            categoryProductID: 'TS'
        };
        const Sp1 = await Sp.create(newSP1);
        console.log('SP1 created: ', Sp1.toJSON());
        //Product 2: https://ssstutter.com/p/peak-tee
        const newSP2 = 
        {
            productID: 'TS002',
            productName: 'Peak Tee',
            description: '',
            material: '',
            type: '',
            price: 279000,
            rate: 4.5,
            discount: 0,
            categoryProductID: 'TS'
        };
        const Sp2 = await Sp.create(newSP2);
        console.log('SP2 created: ', Sp2.toJSON());
        //Product 3: https://ssstutter.com/p/textured-plai-jacket-ver-ii
        const newSP3 = 
        {
            productID: 'JK001',
            productName: 'Textured Plaid Jacket Ver II',
            description: 'Hai túi có nắp thân trước, cúc cài áo in chìm logo, vạt áo đuôi tôm',
            material: 'Dạ giữ nhiệt chống gió ấm áp',
            type: 'Dạ ép mịn',
            price: 899000,
            rate: 4.8,
            discount: 50,
            categoryProductID: 'JK'
        };
        const Sp3 = await Sp.create(newSP3);
        console.log('SP3 created: ', Sp3.toJSON());
        //Product 4: https://ssstutter.com/p/sss-daily-khaki-pants
        const newSP4 = 
        {
            productID: 'P001',
            productName: 'Daily Khaki Pants',
            description: 'Có cúc cài cạp và 2 túi sau',
            price: 449000,
            rate: 3.8,
            material: 'Khaki mềm mại',
            type: 'Straight',
            discount: 0,
            categoryProductID: 'P'
        };
        const Sp4 = await Sp.create(newSP4);
        console.log('SP4 created: ', Sp4.toJSON());
        //Product 5: https://ssstutter.com/p/form-jeans-ii
        const newSP5 = 
        {
            productID: 'J001',
            productName: 'Form Jeans-II',
            description: 'Mẫu quần xanh có hiệu ứng wash ria mèo phần viền túi',
            material: 'Jeans',
            type: 'Slim Fit',
            price: 499000,
            rate: 4.2,
            discount: 0,
            categoryProductID: 'J'
        };
        const Sp5 = await Sp.create(newSP5);
        console.log('SP5 created: ', Sp5.toJSON());
        //Product 6: https://ssstutter.com/p/smart-baggy-jeans
        const newSP6 = 
        {
            productID: 'J002',
            productName: 'Smart Baggy Jeans',
            description: 'Cúc kim loại',
            material: 'Jeans',
            type: 'Baggy',
            price: 499000,
            rate: 4,
            discount: 20,
            categoryProductID: 'J'
        };
        const Sp6 = await Sp.create(newSP6);
        console.log('SP6 created: ', Sp6.toJSON());
        //Product 7: https://ssstutter.com/p/city-sweatshirt-2023
        const newSP7 = 
        {
            productID: 'SS001',
            productName: 'City Sweat Shirt 2023',
            description: 'Áo sweatshirt thêu tên 4 thành phố đạt danh hiệu "Tứ Đại" kinh đô thời trang.',
            material: 'Nỉ da cá',
            type: 'Loose',
            price: 449000,
            rate: 3.5,
            discount: 0,
            categoryProductID: 'SS'
        };
        const Sp7 = await Sp.create(newSP7);
        console.log('SP7 created: ', Sp7.toJSON());
        //Product 8: https://ssstutter.com/p/enoughism-tee 
        const newSP8 = 
        {
            productID: 'TS003',
            productName: 'Enoughism Tee',
            description: 'Áo phông cổ tròn, tay cộc, phiên bản cổ cao cải tiến 2.8 cm.',
            material: 'Cotton 250gsm',
            type: 'Loose',
            price: 299000,
            rate: 4.4,
            discount: 0,
            categoryProductID: 'TS'
        };
        const Sp8 = await Sp.create(newSP8);
        console.log('SP8 created: ', Sp8.toJSON());
         //Product 9: https://routine.vn/ao-khoac-chan-bong-nam-co-cao-phoi-day-keo-form-regular-10f23jac005.html
         const newSP9 = 
         {
             productID: 'JK002',
             productName: 'Áo Khoác Chần Bông Nam Cổ Cao Phối Dây Kéo Form Regular ',
             description: 'Bên trong vải được nhồi bông tăng khả năng giữ ấm, dáng áo vừa vặn với cơ thể,',
             material: 'Nylon',
             type: 'Regular',
             price: 1129000,
             rate: 3.8,
             discount: 0,
             categoryProductID: 'JK'
         };
         const Sp9 = await Sp.create(newSP9);
         console.log('SP9 created: ', Sp9.toJSON());
         //Product 10: https://routine.vn/ao-khoac-bomber-nam-kaki-khoa-keo-gap-ly-form-regular-10f23jac009.html
         const newSP10 = 
         {
             productID: 'JK003',
             productName: 'Áo Khoác Bomber Nam Kaki Khóa Kéo Gập Ly Form Regular',
             description: '',
             material: 'Khaki',
             type: 'Regular',
             price: 1178000,
             rate: 4,
             discount: 0,
             categoryProductID: 'JK'
         };
         const Sp10 = await Sp.create(newSP10);
         console.log('SP10 created: ', Sp10.toJSON());
         //Product 11: https://routine.vn/quan-jean-tui-hop-jogger-10s23dpa029.html
         const newSP11 = 
         {
             productID: 'J003',
             productName: 'Quần jean túi hộp',
             description: '',
             material: 'Jeans',
             type: 'Jogger',
             price: 638000,
             rate: 4.3,
             discount: 2,
             categoryProductID: 'J'
         };
         const Sp11 = await Sp.create(newSP11);
         console.log('SP11 created: ', Sp11.toJSON());
         //Product 12: https://routine.vn/quan-kaki-nam-tui-suon-tron-form-cargo-10s23pca013.html
         const newSP12 = 
         {
             productID: 'P002',
             productName: 'Quần Túi Sườn Trơn',
             description: '',
             material: 'Khaki',
             type: 'Cargo',
             price: 629000,
             rate: 4.7,
             discount: 2,
             categoryProductID: 'P'
         };
         const Sp12 = await Sp.create(newSP12);
         console.log('SP12 created: ', Sp12.toJSON());
         //Product 13: https://routine.vn/quan-kaki-nam-gap-ly-tron-form-slim-crop-10s23pca001.html
         const newSP13 = 
         {
             productID: 'P003',
             productName: 'Quần Gập Ly Trơn',
             description: 'Kiểu quần được thiết kế thanh lịch dành cho các chàng trai công sở hiện đại, trẻ trung',
             material: 'Cotton',
             type: 'Slim Crop',
             price: 549000,
             rate: 4.9,
             discount: 2,
             categoryProductID: 'P'
         };
         const Sp13 = await Sp.create(newSP13);
         console.log('SP13 created: ', Sp13.toJSON());
         //Product 14: https://ssstutter.com/p/american-polo-sweatshirt
        const newSP14 = 
        {
            productID: 'SS002',
            productName: 'American Polo Sweatshirt',
            description: 'Áo nỉ có cổ polo và cài cúc, có cúc dự phòng,có chi tiết hình cờ Mĩ',
            material: 'Nỉ cotton',
            type: 'Loose',
            price: 499000,
            rate: 3.8,
            discount: 0,
            categoryProductID: 'SS'
        };
        const Sp14 = await Sp.create(newSP14);
        console.log('SP14 created: ', Sp14.toJSON());
        //Product 15: https://ssstutter.com/p/tennis-sweatshirt---ver2
        const newSP15 = 
        {
            productID: 'SS003',
            productName: 'Tennis Sweatshirt',
            description: 'Hình thêu tennis ở ngực áo',
            material: 'Nỉ chân cua định lượng 450gsm',
            type: 'Loose',
            price: 449000,
            rate: 4,
            discount: 50,
            categoryProductID: 'SS'
        };
        const Sp15 = await Sp.create(newSP15);
        console.log('SP15 created: ', Sp15.toJSON());
        //Nữ:
        //Product 16: https://routine.vn/ao-khoac-chan-bong-nu-phoi-mau-form-regular-10f23jacw004.html
        const newSP16 = 
        {
            productID: 'JK*001',
            productName: 'Áo Khoác Chần Bông Nữ',
            description: '',
            material: 'Nylon',
            type: 'Regular',
            price: 1178000,
            rate: 4.2,
            discount: 0,
            categoryProductID: 'JK*'
        };
        const Sp16 = await Sp.create(newSP16);
        console.log('SP16 created: ', Sp16.toJSON());
        //Product 17: https://routine.vn/ao-khoac-nhung-nu-croptop-phoi-vien-form-regular-crop-10f22jacw007.html
        const newSP17 = 
        {
            productID: 'JK*002',
            productName: 'Áo Khoác Nhung Nữ Croptop Phối Viền Form Regular Crop',
            description: 'Form áo rộng rãi và ngắn hơn bình thường nhưng phần lay áo và tay áo được thiết kế có bo bó vào người',
            material: 'Polyester',
            type: 'Regular',
            price: 680000,
            rate: 4.6,
            discount: 2,
            categoryProductID: 'JK*'
        };
        const Sp17 = await Sp.create(newSP17);
        console.log('SP17 created: ', Sp17.toJSON());
        //Product 18: https://routine.vn/ao-khoac-gio-nu-co-mu-tui-dap-tron-form-cargo-10s23wjaw001.html
        const newSP18 = 
        {
            productID: 'JK*003',
            productName: 'Áo Khoác Gió Nữ Có Mũ Túi Đắp Trơn',
            description: 'Form dáng suông, rộng. Chất liệu sợi nhân tạo chống nước, chống khuẩn, giữ form ổn định',
            material: 'Polyester',
            type: 'Cargo',
            price: 499000,
            rate: 4.1,
            discount: 2,
            categoryProductID: 'JK*'
        };
        const Sp18 = await Sp.create(newSP18);
        console.log('SP18 created: ', Sp18.toJSON());
        //Product 19: https://routine.vn/dam-so-mi-nep-lech-10s21drew011.html
        const newSP19 = 
        {
            productID: 'Dr001',
            productName: 'Đầm Kiểu Nữ Tay Dài Sơ Mi Nẹp Lệch',
            description: 'Thiết kế cổ lệch kết hợp với hàng nút không nằm ở vị trí chính giữa thường thấy mà nằm bên trái thân áo ',
            material: '97% Cotton / 3% Lycra',
            type: 'Fitted',
            price: 850000,
            rate: 4.9,
            discount: 2,
            categoryProductID: 'Dr'
        };
        const Sp19 = await Sp.create(newSP19);
        console.log('SP19 created: ', Sp19.toJSON());
        //Product 20: https://routine.vn/dam-mini-co-thuyen-fit-10f21drew033.html
        const newSP20 = 
        {
            productID: 'Dr002',
            productName: 'Đầm Nữ Mini Sát Nách Cổ Thuyền',
            description: 'Thiết kế cổ có đường xẻ',
            material: '65% Poly / 33% Viscose / 2% SP',
            type: 'Fitted',
            price: 650000,
            rate: 3.5,
            discount: 2,
            categoryProductID: 'Dr'
        };
        const Sp20 = await Sp.create(newSP20);
        console.log('SP20 created: ', Sp20.toJSON());
        //Product 21: https://routine.vn/dam-midi-sat-nach-co-tron-ra-than-truoc-aline-10s23drew004.html
        const newSP21 = 
        {
            productID: 'Dr003',
            productName: 'Đầm midi sát nách cổ tròn rã thân trước',
            description: '',
            material: 'Rayon',
            type: 'A-line midi',
            price: 638000,
            rate: 3.3,
            discount: 0,
            categoryProductID: 'Dr'
        };
        const Sp21 = await Sp.create(newSP21);
        console.log('SP21 created: ', Sp21.toJSON());
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
insertSP();