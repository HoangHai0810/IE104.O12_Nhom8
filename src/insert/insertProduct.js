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
            productID: 'MTS001',
            productName: 'Mini Logo Tee',
            description: 'Áo phông cổ tròn, tay cộc. Bản bo cổ cải tiến 2.8 cm dày dặn. Có chữ "You look good" ở tay áo.',
            material: 'Cotton 250gsm',
            price: 269000,
            rate: 4,
            discount: 0,
            categoryProductID: 'MTS'
        };
        const Sp1 = await Sp.create(newSP1);
        console.log('SP1 created: ', Sp1.toJSON());
        //Product 2: https://ssstutter.com/p/peak-tee
        const newSP2 = 
        {
            productID: 'MTS002',
            productName: 'Peak Tee',
            description: '',
            material: '',
            price: 279000,
            rate: 4.5,
            discount: 0,
            categoryProductID: 'MTS'
        };
        const Sp2 = await Sp.create(newSP2);
        console.log('SP2 created: ', Sp2.toJSON());
        //Product 3: https://ssstutter.com/p/textured-plai-jacket-ver-ii
        const newSP3 = 
        {
            productID: 'MJK001',
            productName: 'Textured Plaid Jacket Ver II',
            description: 'Hai túi có nắp thân trước, cúc cài áo in chìm logo, vạt áo đuôi tôm',
            material: 'Dạ giữ nhiệt chống gió ấm áp',
            price: 899000,
            rate: 4.8,
            discount: 50,
            categoryProductID: 'MJK'
        };
        const Sp3 = await Sp.create(newSP3);
        console.log('SP3 created: ', Sp3.toJSON());
        //Product 4: https://ssstutter.com/p/sss-daily-khaki-pants
        const newSP4 = 
        {
            productID: 'MP001',
            productName: 'Daily Khaki Pants',
            description: 'Có cúc cài cạp và 2 túi sau',
            price: 449000,
            rate: 3.8,
            material: 'Khaki mềm mại',
            discount: 0,
            categoryProductID: 'MP'
        };
        const Sp4 = await Sp.create(newSP4);
        console.log('SP4 created: ', Sp4.toJSON());
        //Product 5: https://ssstutter.com/p/form-jeans-ii
        const newSP5 = 
        {
            productID: 'MJ001',
            productName: 'Form Jeans-II',
            description: 'Mẫu quần xanh có hiệu ứng wash ria mèo phần viền túi',
            material: 'Jeans',
            price: 499000,
            rate: 4.2,
            discount: 0,
            categoryProductID: 'MJ'
        };
        const Sp5 = await Sp.create(newSP5);
        console.log('SP5 created: ', Sp5.toJSON());
        //Product 6: https://ssstutter.com/p/smart-baggy-jeans
        const newSP6 = 
        {
            productID: 'MJ002',
            productName: 'Smart Baggy Jeans',
            description: 'Cúc kim loại',
            material: 'Jeans',
            price: 499000,
            rate: 4,
            discount: 20,
            categoryProductID: 'MJ'
        };
        const Sp6 = await Sp.create(newSP6);
        console.log('SP6 created: ', Sp6.toJSON());
        //Product 7: https://ssstutter.com/p/city-sweatshirt-2023
        const newSP7 = 
        {
            productID: 'MSS001',
            productName: 'City Sweat Shirt 2023',
            description: 'Áo sweatshirt thêu tên 4 thành phố đạt danh hiệu "Tứ Đại" kinh đô thời trang.',
            material: 'Nỉ da cá',
            price: 449000,
            rate: 3.5,
            discount: 0,
            categoryProductID: 'MSS'
        };
        const Sp7 = await Sp.create(newSP7);
        console.log('SP7 created: ', Sp7.toJSON());
        //Product 8: https://ssstutter.com/p/enoughism-tee 
        const newSP8 = 
        {
            productID: 'MTS003',
            productName: 'Enoughism Tee',
            description: 'Áo phông cổ tròn, tay cộc, phiên bản cổ cao cải tiến 2.8 cm.',
            material: 'Cotton 250gsm',
            price: 299000,
            rate: 4.4,
            discount: 0,
            categoryProductID: 'MTS'
        };
        const Sp8 = await Sp.create(newSP8);
        console.log('SP8 created: ', Sp8.toJSON());
         //Product 9: https://routine.vn/ao-khoac-chan-bong-nam-co-cao-phoi-day-keo-form-regular-10f23jac005.html
         const newSP9 = 
         {
             productID: 'MJK002',
             productName: 'Áo Khoác Chần Bông Nam Cổ Cao Phối Dây Kéo Form Regular ',
             description: 'Bên trong vải được nhồi bông tăng khả năng giữ ấm, dáng áo vừa vặn với cơ thể,',
             material: 'Nylon',
             price: 1129000,
             rate: 3.8,
             discount: 0,
             categoryProductID: 'MJK'
         };
         const Sp9 = await Sp.create(newSP9);
         console.log('SP9 created: ', Sp9.toJSON());
         //Product 10: https://routine.vn/ao-khoac-bomber-nam-kaki-khoa-keo-gap-ly-form-regular-10f23jac009.html
         const newSP10 = 
         {
             productID: 'MJK003',
             productName: 'Áo Khoác Bomber Nam Kaki Khóa Kéo Gập Ly Form Regular',
             description: '',
             material: 'Khaki',
             price: 1178000,
             rate: 4,
             discount: 0,
             categoryProductID: 'MJK'
         };
         const Sp10 = await Sp.create(newSP10);
         console.log('SP10 created: ', Sp10.toJSON());
         //Product 11: https://routine.vn/quan-jean-tui-hop-jogger-10s23dpa029.html
         const newSP11 = 
         {
             productID: 'MJ003',
             productName: 'Quần jean túi hộp',
             description: '',
             material: 'Jeans',
             price: 638000,
             rate: 4.3,
             discount: 2,
             categoryProductID: 'MJ'
         };
         const Sp11 = await Sp.create(newSP11);
         console.log('SP11 created: ', Sp11.toJSON());
         //Product 12: https://routine.vn/quan-kaki-nam-tui-suon-tron-form-cargo-10s23pca013.html
         const newSP12 = 
         {
             productID: 'MP002',
             productName: 'Quần Túi Sườn Trơn',
             description: '',
             material: 'Khaki',
             price: 629000,
             rate: 4.7,
             discount: 2,
             categoryProductID: 'MP'
         };
         const Sp12 = await Sp.create(newSP12);
         console.log('SP12 created: ', Sp12.toJSON());
         //Product 13: https://routine.vn/quan-kaki-nam-gap-ly-tron-form-slim-crop-10s23pca001.html
         const newSP13 = 
         {
             productID: 'MP003',
             productName: 'Quần Gập Ly Trơn',
             description: 'Kiểu quần được thiết kế thanh lịch dành cho các chàng trai công sở hiện đại, trẻ trung',
             material: 'Cotton',
             price: 549000,
             rate: 4.9,
             discount: 2,
             categoryProductID: 'MP'
         };
         const Sp13 = await Sp.create(newSP13);
         console.log('SP13 created: ', Sp13.toJSON());
         //Product 14: https://ssstutter.com/p/american-polo-sweatshirt
        const newSP14 = 
        {
            productID: 'MSS002',
            productName: 'American Polo Sweatshirt',
            description: 'Áo nỉ có cổ polo và cài cúc, có cúc dự phòng,có chi tiết hình cờ Mĩ',
            material: 'Nỉ cotton',
            price: 499000,
            rate: 3.8,
            discount: 0,
            categoryProductID: 'MSS'
        };
        const Sp14 = await Sp.create(newSP14);
        console.log('SP14 created: ', Sp14.toJSON());
        //Product 15: https://ssstutter.com/p/tennis-sweatshirt---ver2
        const newSP15 = 
        {
            productID: 'MSS003',
            productName: 'Tennis Sweatshirt',
            description: 'Hình thêu tennis ở ngực áo',
            material: 'Nỉ chân cua định lượng 450gsm',
            price: 449000,
            rate: 4,
            discount: 50,
            categoryProductID: 'MSS'
        };
        const Sp15 = await Sp.create(newSP15);
        console.log('SP15 created: ', Sp15.toJSON());
        //Product 16: https://routine.vn/ao-gile-len-nam-det-kim-sat-nach-acrylic-co-v-form-regular-10f23kni007.html
        const newSP16 =
        {
            productID: 'MTT001',
            productName: 'Áo Gile Len Nam Dệt Kim Sát Nách Acrylic Cổ V Form Regular',
            description: '',
            material: 'Acrylic',
            price: 471000,
            rate: 4.0,
            discount: 0,
            categoryProductID: 'MTT'
        };
        const Sp16 = await Sp.create(newSP16);
        console.log('SP16 created: ', Sp16.toJSON());
        //Product 17: https://routine.vn/ao-tanktop-nam-co-tron-soc-gan-tron-form-regular-10s17kni006.html
        const newSP17 =
        {
            productID: 'MTT002',
            productName: 'Áo Cổ Tròn Sọc Gân Trơn Form Regular',
            description: 'Form áo cổ điển, ôm vừa vặn cơ thể, chất liệu vải nhẹ và mịn',
            material: 'Wool',
            price: 279000,
            rate: 4.6,
            discount: 2,
            categoryProductID: 'MTT'
        };
        const Sp17 = await Sp.create(newSP17);
        console.log('SP17 created: ', Sp17.toJSON());
        //Product 18: https://routine.vn/ao-thun-tanktop-nam-sat-nach-ke-soc-gan-tron-form-slim-10s23tto001.html
        const newSP18 =
        {
            productID: 'MTT003',
            productName: 'Áo Sát Nách Kẻ Sọc Gân Trơn Form Slim',
            description: 'Khả năng thấm hút mồ hôi và co giãn tốt, thiết kế mặt vải kẻ sọc gân',
            material: '95% cotton 5% spandex',
            price: 229000,
            rate: 4.3,
            discount: 2,
            categoryProductID: 'MTT'
        };
        const Sp18 = await Sp.create(newSP18);
        console.log('SP18 created: ', Sp18.toJSON());
        // Product 19: https://routine.vn/quan-short-nam-ong-rong-rut-day-tron-form-relax-10f23psh024.html
        const newSP19 =
        {
            productID: 'MSP001',
            productName: 'Quần Ống Rộng Rút Dây Trơn Form Relax',
            description: 'Kiểu dáng relax ưu tiên phần đùi và bắp chân rộng, suông thẳng',
            material: 'Polyester',
            price: 441000,
            rate: 3.8,
            discount: 0,
            categoryProductID: 'MSP'
        };
        const Sp19 = await Sp.create(newSP19);
        console.log('SP19 created: ', Sp19.toJSON());
        // Product 20: https://routine.vn/quan-short-the-thao-in-chuyen-nhiet-form-regular-10s23psha001.html
        const newSP20 =
        {
            productID: 'MSP002',
            productName: 'Quần Thể Thao In Chuyển Nhiệt Form Regular',
            description: '',
            material: 'Polyester',
            price: 219000,
            rate: 3.1,
            discount: 1,
            categoryProductID: 'MSP'
        };
        const Sp20 = await Sp.create(newSP20);
        console.log('SP20 created: ', Sp20.toJSON());
        //Product 21: https://routine.vn/quan-short-nam-tui-hop-tron-form-relax-10f22psh014.html
        const newSP21 =
        {
            productID: 'MSP003',
            productName: 'Quần Túi Hộp Trơn Form Relax',
            description: 'Thoáng mát, mịn tay, thấm hút mồ hôi, túi to kèm dây thiết kế độc đáo',
            material: 'Nylon',
            price: 479000,
            rate: 4.2,
            discount: 2,
            categoryProductID: 'MSP'
        };
        const Sp21 = await Sp.create(newSP21);
        console.log('SP21 created: ', Sp21.toJSON());
        //Product 22: https://routine.vn/quan-boxer-und002-s21-10s21und002cr1.html
        const newSP22 =
        {
            productID: 'MU001',
            productName: 'Quần Lót Form Fitted',
            description: 'Có khả năng thấm hút mồ hôi và co giãn tốt',
            material: '95% Cotton / 5% Spandex',
            price: 85000,
            rate: 4.7,
            discount: 54,
            categoryProductID: 'MU'
        };
        const Sp22 = await Sp.create(newSP22);
        console.log('SP22 created: ', Sp22.toJSON());
         //Product 23: https://routine.vn/quan-lot-nam-seamless-co-gion-theu-form-fitted-10s22und001r1.html
         const newSP23 =
         {
             productID: 'MU002',
             productName: 'Quần Lót Seamless Co Giãn Thêu Form Fitted',
             description: '',
             material: '90% Poliamide / 10% Spandex',
             price: 129000,
             rate: 4.1,
             discount: 2,
             categoryProductID: 'MU'
         };
         const Sp23 = await Sp.create(newSP23);
         console.log('SP23 created: ', Sp23.toJSON());
         //Product 24: https://yame.vn/shop/quan-lot-tam-giac/quan-lot-hip-brief-y2010-bamboo-m9-combo-3-0021547?c=Đen
         const newSP24 =
         {
             productID: 'MU003',
             productName: 'Quần Lót Tam Giác Sợi Tre Kiểm Soát Mùi Trơn Dáng Vừa Phụ Kiện Nguyên Bản M9',
             description: 'Kiểm soát mùi cơ thể vượt trội, hạn chế tối đa việc gây dị ứng đối với da nhạy cảm',
             material: '95% Bamboo / 5% Spandex',
             price: 99000,
             rate: 4.9,
             discount: 0,
             categoryProductID: 'MU'
         };
         const Sp24 = await Sp.create(newSP24);
         console.log('SP24 created: ', Sp24.toJSON());
        //Nữ:
        //Product 100: https://routine.vn/ao-khoac-chan-bong-nu-phoi-mau-form-regular-10f23jacw004.html
        const newSP100 = 
        {
            productID: 'WJK001',
            productName: 'Áo Khoác Chần Bông Nữ',
            description: '',
            material: 'Nylon',
            price: 1178000,
            rate: 4.2,
            discount: 0,
            categoryProductID: 'WJK'
        };
        const Sp100 = await Sp.create(newSP100);
        console.log('SP100 created: ', Sp100.toJSON());
        //Product 101: https://routine.vn/ao-khoac-nhung-nu-croptop-phoi-vien-form-regular-crop-10f22jacw007.html
        const newSP101 = 
        {
            productID: 'WJK002',
            productName: 'Áo Khoác Nhung Nữ Croptop Phối Viền Form Regular Crop',
            description: 'Form áo rộng rãi và ngắn hơn bình thường nhưng phần lay áo và tay áo được thiết kế có bo bó vào người',
            material: 'Polyester',
            price: 680000,
            rate: 4.6,
            discount: 2,
            categoryProductID: 'WJK'
        };
        const Sp101 = await Sp.create(newSP101);
        console.log('SP101 created: ', Sp101.toJSON());
        //Product 102: https://routine.vn/ao-khoac-gio-nu-co-mu-tui-dap-tron-form-cargo-10s23wjaw001.html
        const newSP102 = 
        {
            productID: 'WJK003',
            productName: 'Áo Khoác Gió Nữ Có Mũ Túi Đắp Trơn',
            description: 'Form dáng suông, rộng. Chất liệu sợi nhân tạo chống nước, chống khuẩn, giữ form ổn định',
            material: 'Polyester',
            price: 499000,
            rate: 4.1,
            discount: 2,
            categoryProductID: 'WJK'
        };
        const Sp102 = await Sp.create(newSP102);
        console.log('SP102 created: ', Sp102.toJSON());
        //Product 103: https://routine.vn/dam-so-mi-nep-lech-10s21drew011.html
        const newSP103 = 
        {
            productID: 'WDr001',
            productName: 'Đầm Kiểu Nữ Tay Dài Sơ Mi Nẹp Lệch',
            description: 'Thiết kế cổ lệch kết hợp với hàng nút không nằm ở vị trí chính giữa thường thấy mà nằm bên trái thân áo ',
            material: '97% Cotton / 3% Lycra',
            price: 850000,
            rate: 4.9,
            discount: 2,
            categoryProductID: 'WDr'
        };
        const Sp103 = await Sp.create(newSP103);
        console.log('SP103 created: ', Sp103.toJSON());
        //Product 104: https://routine.vn/dam-mini-co-thuyen-fit-10f21drew033.html
        const newSP104 = 
        {
            productID: 'WDr002',
            productName: 'Đầm Nữ Mini Sát Nách Cổ Thuyền',
            description: 'Thiết kế cổ có đường xẻ',
            material: '65% Poly / 33% Viscose / 2% SP',
            price: 650000,
            rate: 3.5,
            discount: 2,
            categoryProductID: 'WDr'
        };
        const Sp104 = await Sp.create(newSP104);
        console.log('SP104 created: ', Sp104.toJSON());
        //Product 105: https://routine.vn/dam-midi-sat-nach-co-tron-ra-than-truoc-aline-10s23drew004.html
        const newSP105 = 
        {
            productID: 'WDr003',
            productName: 'Đầm Midi Sát Nách Cổ Tròn Rã Thân Trước',
            description: '',
            material: 'Rayon',
            price: 638000,
            rate: 3.3,
            discount: 0,
            categoryProductID: 'WDr'
        };
        const Sp105 = await Sp.create(newSP105);
        console.log('SP105 created: ', Sp105.toJSON());
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