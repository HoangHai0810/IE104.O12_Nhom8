const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Product_Color');

const sequelize = new Sequelize(config.development);

const Pr_Cl = UserModel(sequelize, Sequelize.DataTypes);

async function insertPr_Cl()
{
    try
    {
        await sequelize.sync();
        //Product 1: https://ssstutter.com/p/sss-mini-logo-tee
        const newPr_Cl1 = 
        {
            productID: 'MTS001',
            colorID: '#A52A2A',
        };
        const Pr_Cl1 = await Pr_Cl.create(newPr_Cl1);
        console.log('Pr_Cl1 created: ', Pr_Cl1.toJSON());
        const newPr_Cl2 = 
        {
            productID: 'MTS001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl2 = await Pr_Cl.create(newPr_Cl2);
        console.log('Pr_Cl2 created: ', Pr_Cl2.toJSON());
        const newPr_Cl3 = 
        {
            productID: 'MTS001',
            colorID: '#D3D3D3',
        };
        const Pr_Cl3 = await Pr_Cl.create(newPr_Cl3);
        console.log('Pr_Cl3 created: ', Pr_Cl3.toJSON());
        //Product 2: https://ssstutter.com/p/peak-tee
        const newPr_Cl4 = 
        {
            productID: 'MTS002',
            colorID: '#FFFFFF',
        };
        const Pr_Cl4 = await Pr_Cl.create(newPr_Cl4);
        console.log('Pr_Cl4 created: ', Pr_Cl4.toJSON());
        const newPr_Cl5 = 
        {
            productID: 'MTS002',
            colorID: '#000080',
        };
        const Pr_Cl5 = await Pr_Cl.create(newPr_Cl5);
        console.log('Pr_Cl5 created: ', Pr_Cl5.toJSON());
        const newPr_Cl6 = 
        {
            productID: 'MTS002',
            colorID: '#F4A460',
        };
        const Pr_Cl6 = await Pr_Cl.create(newPr_Cl6);
        console.log('Pr_Cl6 created: ', Pr_Cl6.toJSON());
        const newPr_Cl7 = 
        {
            productID: 'MTS002',
            colorID: '#000000',
        };
        const Pr_Cl7 = await Pr_Cl.create(newPr_Cl7);
        console.log('Pr_Cl7 created: ', Pr_Cl7.toJSON());
        const newPr_Cl8 = 
        {
            productID: 'MTS002',
            colorID: '#808080',
        };
        const Pr_Cl8 = await Pr_Cl.create(newPr_Cl8);
        console.log('Pr_Cl8 created: ', Pr_Cl8.toJSON());
        //Product 3: https://ssstutter.com/p/textured-plai-jacket-ver-ii
        const newPr_Cl9 = 
        {
            productID: 'MJK001',
            colorID: '#BC8F8F',
        };
        const Pr_Cl9 = await Pr_Cl.create(newPr_Cl9);
        console.log('Pr_Cl9 created: ', Pr_Cl9.toJSON());
        const newPr_Cl10 = 
        {
            productID: 'MJK001',
            colorID: '#808080',
        };
        const Pr_Cl10 = await Pr_Cl.create(newPr_Cl10);
        console.log('Pr_Cl10 created: ', Pr_Cl10.toJSON());
        //Product 4: https://ssstutter.com/p/sss-daily-khaki-pants
        const newPr_Cl11 = 
        {
            productID: 'MK001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl11 = await Pr_Cl.create(newPr_Cl11);
        console.log('Pr_Cl11 created: ', Pr_Cl11.toJSON());
        const newPr_Cl12 = 
        {
            productID: 'MK001',
            colorID: '#000000',
        };
        const Pr_Cl12 = await Pr_Cl.create(newPr_Cl12);
        console.log('Pr_Cl12 created: ', Pr_Cl12.toJSON());
        //Product 5: https://ssstutter.com/p/form-jeans-ii
        const newPr_Cl13 = 
        {
            productID: 'MJ001',
            colorID: '#000080',
        };
        const Pr_Cl13 = await Pr_Cl.create(newPr_Cl13);
        console.log('Pr_Cl13 created: ', Pr_Cl13.toJSON());
        const newPr_Cl14 = 
        {
            productID: 'MJ001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl14 = await Pr_Cl.create(newPr_Cl14);
        console.log('Pr_Cl14 created: ', Pr_Cl14.toJSON());
        const newPr_Cl15 = 
        {
            productID: 'MJ001',
            colorID: '#00008B',
        };
        const Pr_Cl15 = await Pr_Cl.create(newPr_Cl15);
        console.log('Pr_Cl15 created: ', Pr_Cl15.toJSON());
        const newPr_Cl16 = 
        {
            productID: 'MJ001',
            colorID: '#000000',
        };
        const Pr_Cl16 = await Pr_Cl.create(newPr_Cl16);
        console.log('Pr_Cl16 created: ', Pr_Cl16.toJSON());
        const newPr_Cl17 = 
        {
            productID: 'MJ002',
            colorID: '#87CEFA',
        };
        const Pr_Cl17 = await Pr_Cl.create(newPr_Cl17);
        console.log('Pr_Cl17 created: ', Pr_Cl17.toJSON());
        const newPr_Cl18 = 
        {
            productID: 'MJ002',
            colorID: '#000000',
        };
        const Pr_Cl18 = await Pr_Cl.create(newPr_Cl18);
        console.log('Pr_Cl18 created: ', Pr_Cl18.toJSON());
        const newPr_Cl19 = 
        {
            productID: 'MSS001',
            colorID: '#808000',
        };
        const Pr_Cl19 = await Pr_Cl.create(newPr_Cl19);
        console.log('Pr_Cl19 created: ', Pr_Cl19.toJSON());
        const newPr_Cl20 = 
        {
            productID: 'MSS001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl20 = await Pr_Cl.create(newPr_Cl20);
        console.log('Pr_Cl20 created: ', Pr_Cl20.toJSON());
        const newPr_Cl21 = 
        {
            productID: 'MSS001',
            colorID: '#000080',
        };
        const Pr_Cl21 = await Pr_Cl.create(newPr_Cl21);
        console.log('Pr_Cl21 created: ', Pr_Cl21.toJSON());
        const newPr_Cl22 = 
        {
            productID: 'MTS003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl22 = await Pr_Cl.create(newPr_Cl22);
        console.log('Pr_Cl22 created: ', Pr_Cl22.toJSON());
        const newPr_Cl23 = 
        {
            productID: 'MTS003',
            colorID: '#708090',
        };
        const Pr_Cl23 = await Pr_Cl.create(newPr_Cl23);
        console.log('Pr_Cl23 created: ', Pr_Cl23.toJSON());
        const newPr_Cl24 = 
        {
            productID: 'MTS003',
            colorID: '#000000',
        };
        const Pr_Cl24 = await Pr_Cl.create(newPr_Cl24);
        console.log('Pr_Cl24 created: ', Pr_Cl24.toJSON());
        const newPr_Cl25 = 
        {
            productID: 'MJK002',
            colorID: '#A52A2A',
        };
        const Pr_Cl25 = await Pr_Cl.create(newPr_Cl25);
        console.log('Pr_Cl25 created: ', Pr_Cl25.toJSON());
        const newPr_Cl26 = 
        {
            productID: 'MJK002',
            colorID: '#000000',
        };
        const Pr_Cl26 = await Pr_Cl.create(newPr_Cl26);
        console.log('Pr_Cl26 created: ', Pr_Cl26.toJSON());
        const newPr_Cl27 = 
        {
            productID: 'MJK002',
            colorID: '#0000FF',
        };
        const Pr_Cl27 = await Pr_Cl.create(newPr_Cl27);
        console.log('Pr_Cl27 created: ', Pr_Cl27.toJSON());
        const newPr_Cl28 = 
        {
            productID: 'MJK002',
            colorID: '#FFA500',
        };
        const Pr_Cl28 = await Pr_Cl.create(newPr_Cl28);
        console.log('Pr_Cl28 created: ', Pr_Cl28.toJSON());
        const newPr_Cl29 = 
        {
            productID: 'MJK003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl29 = await Pr_Cl.create(newPr_Cl29);
        console.log('Pr_Cl29 created: ', Pr_Cl29.toJSON());
        const newPr_Cl30 = 
        {
            productID: 'MJK003',
            colorID: '#000000',
        };
        const Pr_Cl30 = await Pr_Cl.create(newPr_Cl30);
        console.log('Pr_Cl30 created: ', Pr_Cl30.toJSON());
        const newPr_Cl31 = 
        {
            productID: 'MJ003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl31 = await Pr_Cl.create(newPr_Cl31);
        console.log('Pr_Cl31 created: ', Pr_Cl31.toJSON());
        const newPr_Cl32 = 
        {
            productID: 'MJ003',
            colorID: '#A52A2A',
        };
        const Pr_Cl32 = await Pr_Cl.create(newPr_Cl32);
        console.log('Pr_Cl32 created: ', Pr_Cl32.toJSON());
        const newPr_Cl33 = 
        {
            productID: 'MK002',
            colorID: '#F5F5DC',
        };
        const Pr_Cl33 = await Pr_Cl.create(newPr_Cl33);
        console.log('Pr_Cl33 created: ', Pr_Cl33.toJSON());
        const newPr_Cl34 = 
        {
            productID: 'MK003',
            colorID: '#000000',
        };
        const Pr_Cl34 = await Pr_Cl.create(newPr_Cl34);
        console.log('Pr_Cl34 created: ', Pr_Cl34.toJSON());
        const newPr_Cl35 = 
        {
            productID: 'MK003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl35 = await Pr_Cl.create(newPr_Cl35);
        console.log('Pr_Cl35 created: ', Pr_Cl35.toJSON());
        const newPr_Cl36 = 
        {
            productID: 'MK003',
            colorID: '#2E8B57',
        };
        const Pr_Cl36 = await Pr_Cl.create(newPr_Cl36);
        console.log('Pr_Cl36 created: ', Pr_Cl36.toJSON());
        const newPr_Cl37 = 
        {
            productID: 'MSS002',
            colorID: '#000080',
        };
        const Pr_Cl37 = await Pr_Cl.create(newPr_Cl37);
        console.log('Pr_Cl37 created: ', Pr_Cl37.toJSON());
        const newPr_Cl38 = 
        {
            productID: 'MSS002',
            colorID: '#FFFF00',
        };
        const Pr_Cl38 = await Pr_Cl.create(newPr_Cl38);
        console.log('Pr_Cl38 created: ', Pr_Cl38.toJSON());
        const newPr_Cl39 = 
        {
            productID: 'MSS003',
            colorID: '#228B22',
        };
        const Pr_Cl39 = await Pr_Cl.create(newPr_Cl39);
        console.log('Pr_Cl39 created: ', Pr_Cl39.toJSON());
        const newPr_Cl40 = 
        {
            productID: 'MSS003',
            colorID: '#000080',
        };
        const Pr_Cl40 = await Pr_Cl.create(newPr_Cl40);
        console.log('Pr_Cl40 created: ', Pr_Cl40.toJSON());
        const newPr_Cl41 = 
        {
            productID: 'MSS003',
            colorID: '#FFFFF0',
        };
        const Pr_Cl41 = await Pr_Cl.create(newPr_Cl41);
        console.log('Pr_Cl41 created: ', Pr_Cl41.toJSON());
        const newPr_Cl42 = 
        {
            productID: 'MTT001',
            colorID: '#000000',
        };
        const Pr_Cl42 = await Pr_Cl.create(newPr_Cl42);
        console.log('Pr_Cl42 created: ', Pr_Cl42.toJSON());
        const newPr_Cl43 = 
        {
            productID: 'MTT001',
            colorID: '#808080',
        };
        const Pr_Cl43 = await Pr_Cl.create(newPr_Cl43);
        console.log('Pr_Cl43 created: ', Pr_Cl43.toJSON());
        const newPr_Cl44 = 
        {
            productID: 'MTT001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl44 = await Pr_Cl.create(newPr_Cl44);
        console.log('Pr_Cl44 created: ', Pr_Cl44.toJSON());
        const newPr_Cl45 = 
        {
            productID: 'MTT002',
            colorID: '#FFFFFF',
        };
        const Pr_Cl45 = await Pr_Cl.create(newPr_Cl45);
        console.log('Pr_Cl45 created: ', Pr_Cl45.toJSON());
        const newPr_Cl46 = 
        {
            productID: 'MTT002',
            colorID: '#0000FF',
        };
        const Pr_Cl46 = await Pr_Cl.create(newPr_Cl46);
        console.log('Pr_Cl46 created: ', Pr_Cl46.toJSON());
        const newPr_Cl47 = 
        {
            productID: 'MTT002',
            colorID: '#808080',
        };
        const Pr_Cl47 = await Pr_Cl.create(newPr_Cl47);
        console.log('Pr_Cl47 created: ', Pr_Cl47.toJSON());
        const newPr_Cl48 = 
        {
            productID: 'MTT003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl48 = await Pr_Cl.create(newPr_Cl48);
        console.log('Pr_Cl48 created: ', Pr_Cl48.toJSON());
        const newPr_Cl49 = 
        {
            productID: 'MTT003',
            colorID: '#000000',
        };
        const Pr_Cl49 = await Pr_Cl.create(newPr_Cl49);
        console.log('Pr_Cl49 created: ', Pr_Cl49.toJSON());
        const newPr_Cl50 = 
        {
            productID: 'MTT003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl50 = await Pr_Cl.create(newPr_Cl50);
        console.log('Pr_Cl50 created: ', Pr_Cl50.toJSON());
        const newPr_Cl51 = 
        {
            productID: 'MSP001',
            colorID: '#000000',
        };
        const Pr_Cl51 = await Pr_Cl.create(newPr_Cl51);
        console.log('Pr_Cl51 created: ', Pr_Cl51.toJSON());
        const newPr_Cl52 = 
        {
            productID: 'MSP001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl52 = await Pr_Cl.create(newPr_Cl52);
        console.log('Pr_Cl52 created: ', Pr_Cl52.toJSON());
        const newPr_Cl53 = 
        {
            productID: 'MSP002',
            colorID: '#000000',
        };
        const Pr_Cl53 = await Pr_Cl.create(newPr_Cl53);
        console.log('Pr_Cl53 created: ', Pr_Cl53.toJSON());
        const newPr_Cl54 = 
        {
            productID: 'MSP002',
            colorID: '#000080',
        };
        const Pr_Cl54 = await Pr_Cl.create(newPr_Cl54);
        console.log('Pr_Cl54 created: ', Pr_Cl54.toJSON());
        const newPr_Cl55 = 
        {
            productID: 'MSP002',
            colorID: '#808080',
        };
        const Pr_Cl55 = await Pr_Cl.create(newPr_Cl55);
        console.log('Pr_Cl55 created: ', Pr_Cl55.toJSON());
        const newPr_Cl56 = 
        {
            productID: 'MSP003',
            colorID: '#000080',
        };
        const Pr_Cl56 = await Pr_Cl.create(newPr_Cl56);
        console.log('Pr_Cl56 created: ', Pr_Cl56.toJSON());
        const newPr_Cl57 = 
        {
            productID: 'MSP003',
            colorID: '#F0E68C',
        };
        const Pr_Cl57 = await Pr_Cl.create(newPr_Cl57);
        console.log('Pr_Cl57 created: ', Pr_Cl57.toJSON());
        const newPr_Cl58 = 
        {
            productID: 'MU001',
            colorID: '#0000FF',
        };
        const Pr_Cl58 = await Pr_Cl.create(newPr_Cl58);
        console.log('Pr_Cl58 created: ', Pr_Cl58.toJSON());
        const newPr_Cl59 = 
        {
            productID: 'MU001',
            colorID: '#808080',
        };
        const Pr_Cl59 = await Pr_Cl.create(newPr_Cl59);
        console.log('Pr_Cl59 created: ', Pr_Cl59.toJSON());
        const newPr_Cl60 = 
        {
            productID: 'MU001',
            colorID: '#000080',
        };
        const Pr_Cl60 = await Pr_Cl.create(newPr_Cl60);
        console.log('Pr_Cl60 created: ', Pr_Cl60.toJSON());
        const newPr_Cl61 = 
        {
            productID: 'MU002',
            colorID: '#ADD8E6',
        };
        const Pr_Cl61 = await Pr_Cl.create(newPr_Cl61);
        console.log('Pr_Cl61 created: ', Pr_Cl61.toJSON());
        const newPr_Cl62 = 
        {
            productID: 'MU002',
            colorID: '#000000',
        };
        const Pr_Cl62 = await Pr_Cl.create(newPr_Cl62);
        console.log('Pr_Cl62 created: ', Pr_Cl62.toJSON());
        const newPr_Cl63 = 
        {
            productID: 'MU002',
            colorID: '#FFFFFF',
        };
        const Pr_Cl63 = await Pr_Cl.create(newPr_Cl63);
        console.log('Pr_Cl63 created: ', Pr_Cl63.toJSON());
        const newPr_Cl64 = 
        {
            productID: 'MU002',
            colorID: '#A52A2A',
        };
        const Pr_Cl64 = await Pr_Cl.create(newPr_Cl64);
        console.log('Pr_Cl64 created: ', Pr_Cl64.toJSON());
        const newPr_Cl65 = 
        {
            productID: 'MU003',
            colorID: '#000000',
        };
        const Pr_Cl65 = await Pr_Cl.create(newPr_Cl65);
        console.log('Pr_Cl65 created: ', Pr_Cl65.toJSON());
        /* ------------------------------------------------*/
        const newPr_Cl100 = 
        {
            productID: 'WJK001',
            colorID: '#000000',
        };
        const Pr_Cl100 = await Pr_Cl.create(newPr_Cl100);
        console.log('Pr_Cl100 created: ', Pr_Cl100.toJSON());
        const newPr_Cl101 = 
        {
            productID: 'WJK001',
            colorID: '#A52A2A',
        };
        const Pr_Cl101 = await Pr_Cl.create(newPr_Cl101);
        console.log('Pr_Cl101 created: ', Pr_Cl101.toJSON());
        const newPr_Cl102 = 
        {
            productID: 'WJK002',
            colorID: '#000000',
        };
        const Pr_Cl102 = await Pr_Cl.create(newPr_Cl102);
        console.log('Pr_Cl102 created: ', Pr_Cl102.toJSON());
        const newPr_Cl103 = 
        {
            productID: 'WJK003',
            colorID: '#000000',
        };
        const Pr_Cl103 = await Pr_Cl.create(newPr_Cl103);
        console.log('Pr_Cl103 created: ', Pr_Cl103.toJSON());
        const newPr_Cl104 = 
        {
            productID: 'WJK003',
            colorID: '#9ACD32',
        };
        const Pr_Cl104 = await Pr_Cl.create(newPr_Cl104);
        console.log('Pr_Cl104 created: ', Pr_Cl104.toJSON());
        const newPr_Cl105 = 
        {
            productID: 'WJK003',
            colorID: '#FFA500',
        };
        const Pr_Cl105 = await Pr_Cl.create(newPr_Cl105);
        console.log('Pr_Cl105 created: ', Pr_Cl105.toJSON());
        const newPr_Cl106 = 
        {
            productID: 'WDr001',
            colorID: '#000000',
        };
        const Pr_Cl106 = await Pr_Cl.create(newPr_Cl106);
        console.log('Pr_Cl106 created: ', Pr_Cl106.toJSON());
        const newPr_Cl107 = 
        {
            productID: 'WDr002',
            colorID: '#F0E68C',
        };
        const Pr_Cl107 = await Pr_Cl.create(newPr_Cl107);
        console.log('Pr_Cl107 created: ', Pr_Cl107.toJSON());
        const newPr_Cl108 = 
        {
            productID: 'WDr002',
            colorID: '#000080',
        };
        const Pr_Cl108 = await Pr_Cl.create(newPr_Cl108);
        console.log('Pr_Cl108 created: ', Pr_Cl108.toJSON());
        const newPr_Cl109 = 
        {
            productID: 'WDr003',
            colorID: '#006400',
        };
        const Pr_Cl109 = await Pr_Cl.create(newPr_Cl109);
        console.log('Pr_Cl109 created: ', Pr_Cl109.toJSON());
        const newPr_Cl110 = 
        {
            productID: 'WTS001',
            colorID: '#FFB6C1',
        };
        const Pr_Cl110 = await Pr_Cl.create(newPr_Cl110);
        console.log('Pr_Cl110 created: ', Pr_Cl110.toJSON());
        const newPr_Cl111 = 
        {
            productID: 'WTS001',
            colorID: '#000000',
        };
        const Pr_Cl111 = await Pr_Cl.create(newPr_Cl111);
        console.log('Pr_Cl111 created: ', Pr_Cl111.toJSON());
        const newPr_Cl112 =
        {
            productID: 'WTS001',
            colorID: '#00008B',
        };
        const Pr_Cl112 = await Pr_Cl.create(newPr_Cl112);
        console.log('Pr_Cl112 created: ', Pr_Cl112.toJSON());
        const newPr_Cl113 = 
        {
            productID: 'WTS002',
            colorID: '#8FBC8F',
        };
        const Pr_Cl113 = await Pr_Cl.create(newPr_Cl113);
        console.log('Pr_Cl113 created: ', Pr_Cl113.toJSON());
        const newPr_Cl114 = 
        {
            productID: 'WTS002',
            colorID: '#FFA500',
        };
        const Pr_Cl114 = await Pr_Cl.create(newPr_Cl114);
        console.log('Pr_Cl114 created: ', Pr_Cl114.toJSON());
        const newPr_Cl115 =
        {
            productID: 'WTS002',
            colorID: '#FFB6C1',
        };
        const Pr_Cl115 = await Pr_Cl.create(newPr_Cl115);
        console.log('Pr_Cl115 created: ', Pr_Cl115.toJSON());
        const newPr_Cl116 = 
        {
            productID: 'WTS003',
            colorID: '#FFC0CB',
        };
        const Pr_Cl116 = await Pr_Cl.create(newPr_Cl116);
        console.log('Pr_Cl116 created: ', Pr_Cl116.toJSON());
        const newPr_Cl117 = 
        {
            productID: 'WTS003',
            colorID: '#000000',
        };
        const Pr_Cl117 = await Pr_Cl.create(newPr_Cl117);
        console.log('Pr_Cl117 created: ', Pr_Cl117.toJSON());
        const newPr_Cl118 =
        {
            productID: 'WTS003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl118 = await Pr_Cl.create(newPr_Cl118);
        console.log('Pr_Cl118 created: ', Pr_Cl118.toJSON());
        const newPr_Cl119 = 
        {
            productID: 'WS001',
            colorID: '#000000',
        };
        const Pr_Cl119 = await Pr_Cl.create(newPr_Cl119);
        console.log('Pr_Cl119 created: ', Pr_Cl119.toJSON());
        const newPr_Cl120 = 
        {
            productID: 'WS001',
            colorID: '#FFFFFF',
        };
        const Pr_Cl120 = await Pr_Cl.create(newPr_Cl120);
        console.log('Pr_Cl120 created: ', Pr_Cl120.toJSON());
        const newPr_Cl121 = 
        {
            productID: 'WS001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl121 = await Pr_Cl.create(newPr_Cl121);
        console.log('Pr_Cl121 created: ', Pr_Cl121.toJSON());
        const newPr_Cl122 = 
        {
            productID: 'WS002',
            colorID: '#F8F8FF',
        };
        const Pr_Cl122 = await Pr_Cl.create(newPr_Cl122);
        console.log('Pr_Cl122 created: ', Pr_Cl122.toJSON());
        const newPr_Cl123 = 
        {
            productID: 'WS002',
            colorID: '#9ACD32',
        };
        const Pr_Cl123 = await Pr_Cl.create(newPr_Cl123);
        console.log('Pr_Cl123 created: ', Pr_Cl123.toJSON());
        const newPr_Cl124 = 
        {
            productID: 'WS003',
            colorID: '#000000',
        };
        const Pr_Cl124 = await Pr_Cl.create(newPr_Cl124);
        console.log('Pr_Cl124 created: ', Pr_Cl124.toJSON());
        const newPr_Cl125 = 
        {
            productID: 'WS003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl125 = await Pr_Cl.create(newPr_Cl125);
        console.log('Pr_Cl125 created: ', Pr_Cl125.toJSON());
        const newPr_Cl126 = 
        {
            productID: 'WS003',
            colorID: '#9ACD32',
        };
        const Pr_Cl126 = await Pr_Cl.create(newPr_Cl126);
        console.log('Pr_Cl126 created: ', Pr_Cl126.toJSON());
        const newPr_Cl127 = 
        {
            productID: 'WJ001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl127 = await Pr_Cl.create(newPr_Cl127);
        console.log('Pr_Cl127 created: ', Pr_Cl127.toJSON());
        const newPr_Cl128 = 
        {
            productID: 'WJ002',
            colorID: '#00008B',
        };
        const Pr_Cl128 = await Pr_Cl.create(newPr_Cl128);
        console.log('Pr_Cl128 created: ', Pr_Cl128.toJSON());
        const newPr_Cl129 = 
        {
            productID: 'WJ003',
            colorID: '#808080',
        };
        const Pr_Cl129 = await Pr_Cl.create(newPr_Cl129);
        console.log('Pr_Cl129 created: ', Pr_Cl129.toJSON());
        const newPr_Cl130 = 
        {
            productID: 'WSP001',
            colorID: '#BC8F8F',
        };
        const Pr_Cl130 = await Pr_Cl.create(newPr_Cl130);
        console.log('Pr_Cl130 created: ', Pr_Cl130.toJSON());
        const newPr_Cl131 = 
        {
            productID: 'WSP002',
            colorID: '#F5F5F5',
        };
        const Pr_Cl131 = await Pr_Cl.create(newPr_Cl131);
        console.log('Pr_Cl131 created: ', Pr_Cl130.toJSON());
        const newPr_Cl132 = 
        {
            productID: 'WSP002',
            colorID: '#000000',
        };
        const Pr_Cl132 = await Pr_Cl.create(newPr_Cl132);
        console.log('Pr_Cl132 created: ', Pr_Cl132.toJSON());
        const newPr_Cl133 = 
        {
            productID: 'WSP002',
            colorID: '#FFB6C1',
        };
        const Pr_Cl133 = await Pr_Cl.create(newPr_Cl133);
        console.log('Pr_Cl133 created: ', Pr_Cl133.toJSON());
        const newPr_Cl134 = 
        {
            productID: 'WSP002',
            colorID: '#9ACD32',
        };
        const Pr_Cl134 = await Pr_Cl.create(newPr_Cl134);
        console.log('Pr_Cl134 created: ', Pr_Cl134.toJSON());
        const newPr_Cl135 = 
        {
            productID: 'WSP003',
            colorID: '#9ACD32',
        };
        const Pr_Cl135 = await Pr_Cl.create(newPr_Cl135);
        console.log('Pr_Cl135 created: ', Pr_Cl135.toJSON());
        const newPr_Cl136 = 
        {
            productID: 'WSP003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl136 = await Pr_Cl.create(newPr_Cl136);
        console.log('Pr_Cl136 created: ', Pr_Cl136.toJSON());
        const newPr_Cl137 = 
        {
            productID: 'WP001',
            colorID: '#A52A2A',
        };
        const Pr_Cl137 = await Pr_Cl.create(newPr_Cl137);
        console.log('Pr_Cl137 created: ', Pr_Cl137.toJSON());
        const newPr_Cl138 = 
        {
            productID: 'WP002',
            colorID: '#000000',
        };
        const Pr_Cl138 = await Pr_Cl.create(newPr_Cl138);
        console.log('Pr_Cl138 created: ', Pr_Cl138.toJSON());
        const newPr_Cl139 = 
        {
            productID: 'WP002',
            colorID: '#D3D3D3',
        };
        const Pr_Cl139 = await Pr_Cl.create(newPr_Cl139);
        console.log('Pr_Cl139 created: ', Pr_Cl139.toJSON());
        const newPr_Cl140 = 
        {
            productID: 'WP003',
            colorID: '#9ACD32',
        };
        const Pr_Cl140 = await Pr_Cl.create(newPr_Cl140);
        console.log('Pr_Cl140 created: ', Pr_Cl140.toJSON());
        const newPr_Cl141 = 
        {
            productID: 'WAP001',
            colorID: '#000000',
        };
        const Pr_Cl141 = await Pr_Cl.create(newPr_Cl141);
        console.log('Pr_Cl141 created: ', Pr_Cl141.toJSON());
        const newPr_Cl142 = 
        {
            productID: 'WAP002',
            colorID: '#000000',
        };
        const Pr_Cl142 = await Pr_Cl.create(newPr_Cl142);
        console.log('Pr_Cl142 created: ', Pr_Cl142.toJSON());
        const newPr_Cl143 = 
        {
            productID: 'WAP002',
            colorID: '#F5F5DC',
        };
        const Pr_Cl143 = await Pr_Cl.create(newPr_Cl143);
        console.log('Pr_Cl143 created: ', Pr_Cl143.toJSON());
        const newPr_Cl144 = 
        {
            productID: 'WAP002',
            colorID: '#A52A2A',
        };
        const Pr_Cl144 = await Pr_Cl.create(newPr_Cl144);
        console.log('Pr_Cl144 created: ', Pr_Cl144.toJSON());
        const newPr_Cl145 = 
        {
            productID: 'WAP002',
            colorID: '#A9A9A9',
        };
        const Pr_Cl145 = await Pr_Cl.create(newPr_Cl145);
        console.log('Pr_Cl145 created: ', Pr_Cl145.toJSON());
        const newPr_Cl146 = 
        {
            productID: 'WAP002',
            colorID: '#9370D8',
        };
        const Pr_Cl146 = await Pr_Cl.create(newPr_Cl146);
        console.log('Pr_Cl146 created: ', Pr_Cl146.toJSON());
        const newPr_Cl147 = 
        {
            productID: 'WAP003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl147 = await Pr_Cl.create(newPr_Cl147);
        console.log('Pr_Cl147 created: ', Pr_Cl147.toJSON());
        /* ----------------------------------------------*/
        const newPr_Cl200 = 
        {
            productID: 'AS001',
            colorID: '#000000',
        };
        const Pr_Cl200 = await Pr_Cl.create(newPr_Cl200);
        console.log('Pr_Cl200 created: ', Pr_Cl200.toJSON());
        const newPr_Cl201 = 
        {
            productID: 'AS001',
            colorID: '#A52A2A',
        };
        const Pr_Cl201 = await Pr_Cl.create(newPr_Cl201);
        console.log('Pr_Cl201 created: ', Pr_Cl201.toJSON());
        const newPr_Cl202 = 
        {
            productID: 'AS002',
            colorID: '#000000',
        };
        const Pr_Cl202 = await Pr_Cl.create(newPr_Cl202);
        console.log('Pr_Cl202 created: ', Pr_Cl202.toJSON());
        const newPr_Cl203 = 
        {
            productID: 'AS002',
            colorID: '#A52A2A',
        };
        const Pr_Cl203 = await Pr_Cl.create(newPr_Cl203);
        console.log('Pr_Cl203 created: ', Pr_Cl203.toJSON());
        const newPr_Cl204 = 
        {
            productID: 'AS003',
            colorID: '#000000',
        };
        const Pr_Cl204 = await Pr_Cl.create(newPr_Cl204);
        console.log('Pr_Cl204 created: ', Pr_Cl204.toJSON());
        const newPr_Cl205 = 
        {
            productID: 'AS003',
            colorID: '#A52A2A',
        };
        const Pr_Cl205 = await Pr_Cl.create(newPr_Cl205);
        console.log('Pr_Cl205 created: ', Pr_Cl205.toJSON());
        const newPr_Cl206 = 
        {
            productID: 'AS003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl206 = await Pr_Cl.create(newPr_Cl206);
        console.log('Pr_Cl206 created: ', Pr_Cl206.toJSON());
        const newPr_Cl207 = 
        {
            productID: 'ASO001',
            colorID: '#000000',
        };
        const Pr_Cl207 = await Pr_Cl.create(newPr_Cl207);
        console.log('Pr_Cl207 created: ', Pr_Cl207.toJSON());
        const newPr_Cl208 = 
        {
            productID: 'ASO001',
            colorID: '#808080',
        };
        const Pr_Cl208 = await Pr_Cl.create(newPr_Cl208);
        console.log('Pr_Cl208 created: ', Pr_Cl208.toJSON());
        const newPr_Cl209 = 
        {
            productID: 'ASO002',
            colorID: '#A52A2A',
        };
        const Pr_Cl209 = await Pr_Cl.create(newPr_Cl209);
        console.log('Pr_Cl209 created: ', Pr_Cl209.toJSON());
        const newPr_Cl210 = 
        {
            productID: 'ASO002',
            colorID: '#808080',
        };
        const Pr_Cl210 = await Pr_Cl.create(newPr_Cl210);
        console.log('Pr_Cl210 created: ', Pr_Cl210.toJSON());
        const newPr_Cl211 = 
        {
            productID: 'ASO003',
            colorID: '#000000',
        };
        const Pr_Cl211 = await Pr_Cl.create(newPr_Cl211);
        console.log('Pr_Cl211 created: ', Pr_Cl211.toJSON());
        const newPr_Cl212 = 
        {
            productID: 'ASO003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl212 = await Pr_Cl.create(newPr_Cl212);
        console.log('Pr_Cl212 created: ', Pr_Cl212.toJSON());
        const newPr_Cl213 = 
        {
            productID: 'ASO003',
            colorID: '#0000FF',
        };
        const Pr_Cl213 = await Pr_Cl.create(newPr_Cl213);
        console.log('Pr_Cl213 created: ', Pr_Cl213.toJSON());



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
insertPr_Cl();