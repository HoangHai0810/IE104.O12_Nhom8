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
            productID: 'MK001',
            productName: 'Daily Khaki Pants',
            description: 'Có cúc cài cạp và 2 túi sau',
            price: 449000,
            rate: 3.8,
            material: 'Khaki mềm mại',
            discount: 0,
            categoryProductID: 'MK'
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
            discount: 10,
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
             productID: 'MK002',
             productName: 'Quần Túi Sườn Trơn',
             description: '',
             material: 'Khaki',
             price: 629000,
             rate: 4.7,
             discount: 2,
             categoryProductID: 'MK'
         };
         const Sp12 = await Sp.create(newSP12);
         console.log('SP12 created: ', Sp12.toJSON());
         //Product 13: https://routine.vn/quan-kaki-nam-gap-ly-tron-form-slim-crop-10s23pca001.html
         const newSP13 = 
         {
             productID: 'MK003',
             productName: 'Quần Gập Ly Trơn',
             description: 'Kiểu quần được thiết kế thanh lịch dành cho các chàng trai công sở hiện đại, trẻ trung',
             material: 'Cotton',
             price: 549000,
             rate: 4.9,
             discount: 2,
             categoryProductID: 'MK'
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
            productName: 'Đầm Tay Dài Sơ Mi Nẹp Lệch',
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
            productName: 'Đầm Mini Sát Nách Cổ Thuyền',
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
        //Product 106: https://routine.vn/ao-polo-nu-tay-bo-cotton-pique-tron-form-fitted-10s23polw002.html
        const newSP106 = 
        {
            productID: 'WTS001',
            productName: 'Áo Polo Tay Bo Trơn Form Fitted',
            description: '',
            material: 'Cotton Pique',
            price: 392000,
            rate: 4.1,
            discount: 0,
            categoryProductID: 'WTS'
        };
        const Sp106 = await Sp.create(newSP106);
        console.log('SP106 created: ', Sp106.toJSON());
        //Product 107: https://routine.vn/ao-thun-nu-tay-ngan-co-tron-ke-soc-ngang-form-fitted-10s23tssw012.html
        const newSP107 = 
        {
            productID: 'WTS002',
            productName: 'Áo Tay Ngắn Cổ Tròn Kẻ Sọc Ngang Form Fitted',
            description: '',
            material: 'Cotton',
            price: 299000,
            rate: 4.3,
            discount: 2,
            categoryProductID: 'WTS'
        };
        const Sp107 = await Sp.create(newSP107);
        console.log('SP107 created: ', Sp107.toJSON());
        //Product 108: https://routine.vn/ao-thun-tay-ngan-in-regular-crop-10s22tssw002.html
        const newSP108 = 
        {
            productID: 'WTS003',
            productName: 'Áo Croptop Tay Ngắn In Chữ Form Regular Crop',
            description: 'Áo có các tone màu basic vừa không kén da người mặc lại vừa dễ phối đồ',
            material: 'Cotton',
            price: 320000,
            rate: 4.8,
            discount: 53,
            categoryProductID: 'WTS'
        };
        const Sp108 = await Sp.create(newSP108);
        console.log('SP108 created: ', Sp108.toJSON());
        //Product 109: https://routine.vn/ao-so-mi-nu-tay-dai-tron-form-regular-10f22shlw014.html?utm_source=google&utm_medium=cpc&utm_campaign=%7Bcampaignname%7D&utm_content=%7Badgroupname%7D&utm_keyword=&utm_matchtype=&campaign_id=20767326427&ad_group_id=&ad_id=&matchtype=&device=c&product_partition_id=&adposition=&loc_interest_ms=&loc_physical_ms=1028581&feeditemid=&gad_source=1&gclid=CjwKCAiAvJarBhA1EiwAGgZl0NXWVWE3FVy5GVbl2msmKwKYMv5smjihJfWj0oUEBI8fEBaEFCrQVxoCfn4QAvD_BwE
        const newSP109 = 
        {
            productID: 'WS001',
            productName: 'Áo Sơ Mi Nữ Tay Dài Trơn Nhún Nẹp Form Regular',
            description: '',
            material: 'Polyester',
            price: 520000,
            rate: 4.0,
            discount: 0,
            categoryProductID: 'WS'
        };
        const Sp109 = await Sp.create(newSP109);
        console.log('SP109 created: ', Sp109.toJSON());
        //Product 110: https://routine.vn/ao-so-mi-nu-tay-dai-linen-tui-theu-form-regular-crop-10s23shlw010.html
        const newSP110 = 
        {
            productID: 'WS002',
            productName: 'Áo Sơ Mi Nữ Tay Dài Linen Túi Thêu Form Regular Crop',
            description: 'Được làm từ chất vải lanh thoáng mát bật nhất và có độ mỏng nhẹ, form dáng áo có động rộng, suông',
            material: 'Linen',
            price: 549000,
            rate: 5,
            discount: 35,
            categoryProductID: 'WS'
        };
        const Sp110 = await Sp.create(newSP110);
        console.log('SP110 created: ', Sp110.toJSON());
        //Product 111: https://routine.vn/ao-so-mi-nu-tay-dai-tron-xe-sau-form-loose-10f22shlw010.html
        const newSP111 = 
        {
            productID: 'WS003',
            productName: 'Áo Sơ Mi Nữ Viscose Tay Dài Trơn Xẻ Sau Form Loose',
            description: 'Form áo có phần thân và tay áo suông và không ôm sát cơ thể',
            material: '55% Viscose / 45% Poly',
            price: 529000,
            rate: 5,
            discount: 53,
            categoryProductID: 'WS'
        };
        const Sp111 = await Sp.create(newSP111);
        console.log('SP111 created: ', Sp111.toJSON());
        //Product 112: https://routine.vn/quan-jean-lien-suon-lai-tua-loose-10f23dpaw021.html
        const newSP112 = 
        {
            productID: 'WJ001',
            productName: 'Quần Jean Liền Sườn Lai Tưa Form Loose',
            description: '',
            material: 'Cotton',
            price: 649000,
            rate: 3.9,
            discount: 2,
            categoryProductID: 'WJ'
        };
        const Sp112 = await Sp.create(newSP112);
        console.log('SP112 created: ', Sp112.toJSON());
        //Product 113: https://routine.vn/quan-jean-nu-tron-phoi-lai-form-straight-10s23dpaw013.html
        const newSP113 = 
        {
            productID: 'WJ002',
            productName: 'Quần Jean Nữ Trơn Phối Lai Form Straight',
            description: 'Form quần classic suông từ trên xuống, eo và mông được may hơi ôm vào người, phần ống hơi rộng và xòe nhẹ',
            material: 'Jeans',
            price: 579000,
            rate: 3.8,
            discount: 2,
            categoryProductID: 'WJ'
        };
        const Sp113 = await Sp.create(newSP113);
        console.log('SP113 created: ', Sp113.toJSON());
        //Product 114: https://routine.vn/quan-jean-nu-xe-lai-tron-form-flare-10f22dpaw022.html
        const newSP114 = 
        {
            productID: 'WJ003',
            productName: 'Quần Jean Nữ Xẻ Lai Trơn Form Flare',
            description: 'Mang form rộng rãi, thoải mái, ống quần suông thẳng, lai ống quần được thiết kế xẻ độc đáo, phá cách',
            material: 'Jeans',
            price: 549000,
            rate: 4.3,
            discount: 35,
            categoryProductID: 'WJ'
        };
        const Sp114 = await Sp.create(newSP114);
        console.log('SP114 created: ', Sp114.toJSON());
        //Product 115: https://yody.vn/quan-short-kaki-nu-tui-nap
        const newSP115 = 
        {
            productID: 'WSP001',
            productName: 'Quần Short Kaki Nữ Túi Nắp',
            description: 'Chất vải mềm, thấm hút mồ hôi cùng đương mai vô cùng chắc chắn',
            material: '97% Cotton / 3% Spandex',
            price: 349000,
            rate: 5,
            discount: 10,
            categoryProductID: 'WSP'
        };
        const Sp115 = await Sp.create(newSP115);
        console.log('SP115 created: ', Sp115.toJSON());
        //Product 116: https://routine.vn/quan-short-nu-ngan-relax-10f22pshw001.html
        const newSP116 = 
        {
            productID: 'WSP002',
            productName: 'Quần Short Nữ Ngắn Form Relax',
            description: 'Được may theo kiểu dáng ôm vừa, ống suông và được là từ chất liệu tự nhiên có đặc tính thoáng mát, chống mùi và thấm hút mồ hôi tốt.',
            material: 'Polyester',
            price: 380000,
            rate: 4.4,
            discount: 35,
            categoryProductID: 'WSP'
        };
        const Sp116 = await Sp.create(newSP116);
        console.log('SP116 created: ', Sp116.toJSON());
        //Product 117: https://routine.vn/quan-short-nu-lung-cao-tron-form-panama-10s23pshw001.html
        const newSP117 = 
        {
            productID: 'WSP003',
            productName: 'Quần Short Nữ Lưng Cao Trơn Xếp Ly Form Panama',
            description: '',
            material: 'Polyester',
            price: 422000,
            rate: 3.5,
            discount: 0,
            categoryProductID: 'WSP'
        };
        const Sp117 = await Sp.create(newSP117);
        console.log('SP117 created: ', Sp117.toJSON());
        //Product 118: https://routine.vn/quan-vai-nu-ong-rong-xep-ly-form-relax-10f23pfow003.html
        const newSP118 = 
        {
            productID: 'WP001',
            productName: 'Quần Vải Nữ Ống Rộng Sọc Dài Xếp Ly Trơn Form Relax',
            description: 'Quần có đường may xếp ly ở lưng',
            material: 'Polyester',
            price: 638000,
            rate: 3.8,
            discount: 0,
            categoryProductID: 'WP'
        };
        const Sp118 = await Sp.create(newSP118);
        console.log('SP118 created: ', Sp118.toJSON());
        //Product 119: https://routine.vn/quan-dai-tui-mo-xep-ly-carrot-10f22pfow003.html
        const newSP119 = 
        {
            productID: 'WP002',
            productName: 'Quần Dài Nữ Túi Mổ Xếp Ly Form Carrot',
            description: 'Quần được may theo form carrot, có phần hông và đùi được may rộng rãi thoải mái, sau đó phần ống sẽ được may ôm dần xuống dưới',
            material: 'Polyester',
            price: 489000,
            rate: 4.2,
            discount: 35,
            categoryProductID: 'WP'
        };
        const Sp119 = await Sp.create(newSP119);
        console.log('SP119 created: ', Sp119.toJSON());
        //Product 120: https://routine.vn/quan-vai-nu-ong-rong-ke-caro-xep-ly-nhun-truoc-form-wide-leg-10s23pfow020.html
        const newSP120 = 
        {
            productID: 'WP003',
            productName: 'Quần Vải Nữ Ống Rộng Kẻ Caro Xếp Ly Nhún Trước Form Wide Leg',
            description: 'Thấm hút mồ hôi tốt, thiết kế họa tiết caro cá tính, phần lưng quần được may xếp ly',
            material: 'Cotton',
            price: 549000,
            rate: 4.5,
            discount: 35,
            categoryProductID: 'WP'
        };
        const Sp120 = await Sp.create(newSP120);
        console.log('SP120 created: ', Sp120.toJSON());
        //Product 121: https://routine.vn/quan-tay-nu-twill-xep-ly-tron-form-regular-10s23pfow024.html
        const newSP121 = 
        {
            productID: 'WAP001',
            productName: 'Quần Tây Nữ Twill Xếp Ly Trơn Form Regular',
            description: 'Form quần được thiết kế suông, rộng thẳng đứng từ trên xuống nhưng không quá rộng, được làm từ chất liệu bền, mềm mại và đẹp mắt với các sợi đan chéo từ chất vải Twill',
            material: 'Twill',
            price: 599000,
            rate: 4.8,
            discount: 35,
            categoryProductID: 'WAP'
        };
        const Sp121 = await Sp.create(newSP121);
        console.log('SP121 created: ', Sp121.toJSON());
        //Product 122: https://yody.vn/quan-au-nu-relax-pants-co-gian-4-chieu
        const newSP122 = 
        {
            productID: 'WAP002',
            productName: 'Quần Âu Nữ Relax Pants Co Giãn 4 Chiều',
            description: 'Vải hạn chế nhăn, tiết kiệm thời gian chăm sóc, chất liệu co giãn theo cả hai chiều',
            material: '79% Polyester / 17% Viscose / 4% Spandex',
            price: 499000,
            rate: 5,
            discount: 50,
            categoryProductID: 'WAP'
        };
        const Sp122 = await Sp.create(newSP122);
        console.log('SP122 created: ', Sp122.toJSON());
        //Product 123: https://yody.vn/quan-baggy-nu-cong-so-cap-phoi-v
        const newSP123 = 
        {
            productID: 'WAP003',
            productName: 'Quần Baggy Nữ Công Sở Cạp Phối V Chống Nhăn Thoáng Khí',
            description: 'Nhẹ, thoáng mát, hạn chế xù lông, rút sợi, không bạc màu',
            material: 'Tuýt Si',
            price: 499000,
            rate: 3.8,
            discount: 10,
            categoryProductID: 'WAP'
        };
        const Sp123 = await Sp.create(newSP123);
        console.log('SP123 created: ', Sp123.toJSON());
        //Product 200: https://yody.vn/giay-nam-penny-loafer-da-bo-nappa-cao-cap
        const newSP200 = 
        {
            productID: 'AS001',
            productName: 'Giày Nam Penny Loafer Da Bò Nappa Cao Cấp',
            description: 'Hạn chế nếp nhăn, lót giày êm, mềm mại tối đa',
            material: 'Da Bò Nappa',
            price: 1289000,
            rate: 4.5,
            discount: 0,
            categoryProductID: 'AS'
        };
        const Sp200 = await Sp.create(newSP200);
        console.log('SP200 created: ', Sp200.toJSON());
        //Product 201: https://yody.vn/giay-nam-da-that-de-the-thao
        const newSP201 = 
        {
            productID: 'AS002',
            productName: 'Giày Nam Da Thật Đế Thể Thao',
            description: 'Đế cao su siêu êm chân, có độ bám, đi bền bỉ, form dáng thoải mái, ôm chân',
            material: 'Da Bò',
            price: 2689000,
            rate: 2.1,
            discount: 0,
            categoryProductID: 'AS'
        };
        const Sp201 = await Sp.create(newSP201);
        console.log('SP201 created: ', Sp201.toJSON());
        //Product 202: https://yody.vn/giay-sneaker-nam-basic-tre-trung
        const newSP202 = 
        {
            productID: 'AS003',
            productName: 'Giày Sneaker Nam Basic Trẻ Trung',
            description: 'Form dáng thoải mái, đế giày cao su nguyên chất có độ bám dai bền bỉ, lót tẩy Ortholite hút ẩm chống hôi chân',
            material: 'Polyester Microfiber',
            price: 989000,
            rate: 4.8,
            discount: 0,
            categoryProductID: 'AS'
        };
        const Sp202 = await Sp.create(newSP202);
        console.log('SP202 created: ', Sp202.toJSON());
        //Product 203: https://www.uniqlo.com/us/en/products/E462241-000/00?colorDisplayCode=00&sizeDisplayCode=027
        const newSP203 = 
        {
            productID: 'ASO001',
            productName: 'HEATTECH Fluffy Socks',
            description: 'Chất liệu vải mềm mại và thoáng khí, khả năng hấp thụ nhiệt, giữ nhiệt, khử mùi và kiểm soát mùi cơ thể',
            material: '87% Polyester / 8% Acrylic / 2% Rayon / 1% Modal / 1% Spandex / 1% Nylon',
            price: 191500,
            rate: 4.4,
            discount: 0,
            categoryProductID: 'ASO'
        };
        const Sp203 = await Sp.create(newSP203);
        console.log('SP203 created: ', Sp203.toJSON());
        //Product 204: https://www.uniqlo.com/us/en/products/E463645-001/00?colorDisplayCode=03&sizeDisplayCode=027
        const newSP204 = 
        {
            productID: 'ASO002',
            productName: 'HEATTECH Anti-Odor Socks',
            description: 'Khả năng hấp thụ nhiệt và giữ nhiệt, tính năng khử mùi và kiểm soát mùi, rập chun ở mắt cá chân, thiết kế gót rộng',
            material: '29% Acrylic / 27% Nylon / 24% Polyester / 10% Cotton / 9% Rayon / 1% Spandex',
            price: 191500,
            rate: 4.0,
            discount: 0,
            categoryProductID: 'ASO'
        };
        const Sp204 = await Sp.create(newSP204);
        console.log('SP204 created: ', Sp204.toJSON());
        //Product 205: https://www.uniqlo.com/us/en/products/E457278-000/00?colorDisplayCode=09&sizeDisplayCode=027
        const newSP205 = 
        {
            productID: 'ASO003',
            productName: 'Striped Low-Cut Socks',
            description: 'Chất liệu mỏng nhẹ để ôm sát, đế chống trượt ở gót, thiết kế gót cong',
            material: '57% Cotton / 39% Polyester / 4% Spandex',
            price: 143000,
            rate: 4.5,
            discount: 0,
            categoryProductID: 'ASO'
        };
        const Sp205 = await Sp.create(newSP205);
        console.log('SP205 created: ', Sp205.toJSON());
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