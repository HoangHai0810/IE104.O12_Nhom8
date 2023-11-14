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
            productID: 'TS001',
            colorID: '#A52A2A',
        };
        const Pr_Cl1 = await Pr_Cl.create(newPr_Cl1);
        console.log('Pr_Cl1 created: ', Pr_Cl1.toJSON());
        const newPr_Cl2 = 
        {
            productID: 'TS001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl2 = await Pr_Cl.create(newPr_Cl2);
        console.log('Pr_Cl2 created: ', Pr_Cl2.toJSON());
        const newPr_Cl3 = 
        {
            productID: 'TS001',
            colorID: '#D3D3D3',
        };
        const Pr_Cl3 = await Pr_Cl.create(newPr_Cl3);
        console.log('Pr_Cl3 created: ', Pr_Cl3.toJSON());
        //Product 2: https://ssstutter.com/p/peak-tee
        const newPr_Cl4 = 
        {
            productID: 'TS002',
            colorID: '#FFFFFF',
        };
        const Pr_Cl4 = await Pr_Cl.create(newPr_Cl4);
        console.log('Pr_Cl4 created: ', Pr_Cl4.toJSON());
        const newPr_Cl5 = 
        {
            productID: 'TS002',
            colorID: '#000080',
        };
        const Pr_Cl5 = await Pr_Cl.create(newPr_Cl5);
        console.log('Pr_Cl5 created: ', Pr_Cl5.toJSON());
        const newPr_Cl6 = 
        {
            productID: 'TS002',
            colorID: '#F4A460',
        };
        const Pr_Cl6 = await Pr_Cl.create(newPr_Cl6);
        console.log('Pr_Cl6 created: ', Pr_Cl6.toJSON());
        const newPr_Cl7 = 
        {
            productID: 'TS002',
            colorID: '#000000',
        };
        const Pr_Cl7 = await Pr_Cl.create(newPr_Cl7);
        console.log('Pr_Cl7 created: ', Pr_Cl7.toJSON());
        const newPr_Cl8 = 
        {
            productID: 'TS002',
            colorID: '#808080',
        };
        const Pr_Cl8 = await Pr_Cl.create(newPr_Cl8);
        console.log('Pr_Cl8 created: ', Pr_Cl8.toJSON());
        //Product 3: https://ssstutter.com/p/textured-plai-jacket-ver-ii
        const newPr_Cl9 = 
        {
            productID: 'JK001',
            colorID: '#BC8F8F',
        };
        const Pr_Cl9 = await Pr_Cl.create(newPr_Cl9);
        console.log('Pr_Cl9 created: ', Pr_Cl9.toJSON());
        const newPr_Cl10 = 
        {
            productID: 'JK001',
            colorID: '#808080',
        };
        const Pr_Cl10 = await Pr_Cl.create(newPr_Cl10);
        console.log('Pr_Cl10 created: ', Pr_Cl10.toJSON());
        //Product 4: https://ssstutter.com/p/sss-daily-khaki-pants
        const newPr_Cl11 = 
        {
            productID: 'P001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl11 = await Pr_Cl.create(newPr_Cl11);
        console.log('Pr_Cl11 created: ', Pr_Cl11.toJSON());
        const newPr_Cl12 = 
        {
            productID: 'P001',
            colorID: '#000000',
        };
        const Pr_Cl12 = await Pr_Cl.create(newPr_Cl12);
        console.log('Pr_Cl12 created: ', Pr_Cl12.toJSON());
        //Product 5: https://ssstutter.com/p/form-jeans-ii
        const newPr_Cl13 = 
        {
            productID: 'J001',
            colorID: '#000080',
        };
        const Pr_Cl13 = await Pr_Cl.create(newPr_Cl13);
        console.log('Pr_Cl13 created: ', Pr_Cl13.toJSON());
        const newPr_Cl14 = 
        {
            productID: 'J001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl14 = await Pr_Cl.create(newPr_Cl14);
        console.log('Pr_Cl14 created: ', Pr_Cl14.toJSON());
        const newPr_Cl15 = 
        {
            productID: 'J001',
            colorID: '#00008B',
        };
        const Pr_Cl15 = await Pr_Cl.create(newPr_Cl15);
        console.log('Pr_Cl15 created: ', Pr_Cl15.toJSON());
        const newPr_Cl16 = 
        {
            productID: 'J001',
            colorID: '#000000',
        };
        const Pr_Cl16 = await Pr_Cl.create(newPr_Cl16);
        console.log('Pr_Cl16 created: ', Pr_Cl16.toJSON());
        const newPr_Cl17 = 
        {
            productID: 'J002',
            colorID: '#87CEFA',
        };
        const Pr_Cl17 = await Pr_Cl.create(newPr_Cl17);
        console.log('Pr_Cl17 created: ', Pr_Cl17.toJSON());
        const newPr_Cl18 = 
        {
            productID: 'J002',
            colorID: '#000000',
        };
        const Pr_Cl18 = await Pr_Cl.create(newPr_Cl18);
        console.log('Pr_Cl18 created: ', Pr_Cl18.toJSON());
        const newPr_Cl19 = 
        {
            productID: 'SS001',
            colorID: '#808000',
        };
        const Pr_Cl19 = await Pr_Cl.create(newPr_Cl19);
        console.log('Pr_Cl19 created: ', Pr_Cl19.toJSON());
        const newPr_Cl20 = 
        {
            productID: 'SS001',
            colorID: '#F5F5DC',
        };
        const Pr_Cl20 = await Pr_Cl.create(newPr_Cl20);
        console.log('Pr_Cl20 created: ', Pr_Cl20.toJSON());
        const newPr_Cl21 = 
        {
            productID: 'SS001',
            colorID: '#000080',
        };
        const Pr_Cl21 = await Pr_Cl.create(newPr_Cl21);
        console.log('Pr_Cl21 created: ', Pr_Cl21.toJSON());
        const newPr_Cl22 = 
        {
            productID: 'TS003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl22 = await Pr_Cl.create(newPr_Cl22);
        console.log('Pr_Cl22 created: ', Pr_Cl22.toJSON());
        const newPr_Cl23 = 
        {
            productID: 'TS003',
            colorID: '#708090',
        };
        const Pr_Cl23 = await Pr_Cl.create(newPr_Cl23);
        console.log('Pr_Cl23 created: ', Pr_Cl23.toJSON());
        const newPr_Cl24 = 
        {
            productID: 'TS003',
            colorID: '#000000',
        };
        const Pr_Cl24 = await Pr_Cl.create(newPr_Cl24);
        console.log('Pr_Cl24 created: ', Pr_Cl24.toJSON());
        const newPr_Cl25 = 
        {
            productID: 'JK002',
            colorID: '#A52A2A',
        };
        const Pr_Cl25 = await Pr_Cl.create(newPr_Cl25);
        console.log('Pr_Cl25 created: ', Pr_Cl25.toJSON());
        const newPr_Cl26 = 
        {
            productID: 'JK002',
            colorID: '#000000',
        };
        const Pr_Cl26 = await Pr_Cl.create(newPr_Cl26);
        console.log('Pr_Cl26 created: ', Pr_Cl26.toJSON());
        const newPr_Cl27 = 
        {
            productID: 'JK002',
            colorID: '#0000FF',
        };
        const Pr_Cl27 = await Pr_Cl.create(newPr_Cl27);
        console.log('Pr_Cl27 created: ', Pr_Cl27.toJSON());
        const newPr_Cl28 = 
        {
            productID: 'JK002',
            colorID: '#FFA500',
        };
        const Pr_Cl28 = await Pr_Cl.create(newPr_Cl28);
        console.log('Pr_Cl28 created: ', Pr_Cl28.toJSON());
        const newPr_Cl29 = 
        {
            productID: 'JK003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl29 = await Pr_Cl.create(newPr_Cl29);
        console.log('Pr_Cl29 created: ', Pr_Cl29.toJSON());
        const newPr_Cl30 = 
        {
            productID: 'JK003',
            colorID: '#000000',
        };
        const Pr_Cl30 = await Pr_Cl.create(newPr_Cl30);
        console.log('Pr_Cl30 created: ', Pr_Cl30.toJSON());
        const newPr_Cl31 = 
        {
            productID: 'J003',
            colorID: '#F5F5DC',
        };
        const Pr_Cl31 = await Pr_Cl.create(newPr_Cl31);
        console.log('Pr_Cl31 created: ', Pr_Cl31.toJSON());
        const newPr_Cl32 = 
        {
            productID: 'J003',
            colorID: '#A52A2A',
        };
        const Pr_Cl32 = await Pr_Cl.create(newPr_Cl32);
        console.log('Pr_Cl32 created: ', Pr_Cl32.toJSON());
        const newPr_Cl33 = 
        {
            productID: 'P002',
            colorID: '#F5F5DC',
        };
        const Pr_Cl33 = await Pr_Cl.create(newPr_Cl33);
        console.log('Pr_Cl33 created: ', Pr_Cl33.toJSON());
        const newPr_Cl34 = 
        {
            productID: 'P003',
            colorID: '#000000',
        };
        const Pr_Cl34 = await Pr_Cl.create(newPr_Cl34);
        console.log('Pr_Cl34 created: ', Pr_Cl34.toJSON());
        const newPr_Cl35 = 
        {
            productID: 'P003',
            colorID: '#FFFFFF',
        };
        const Pr_Cl35 = await Pr_Cl.create(newPr_Cl35);
        console.log('Pr_Cl35 created: ', Pr_Cl35.toJSON());
        const newPr_Cl36 = 
        {
            productID: 'P003',
            colorID: '#2E8B57',
        };
        const Pr_Cl36 = await Pr_Cl.create(newPr_Cl36);
        console.log('Pr_Cl36 created: ', Pr_Cl36.toJSON());
        const newPr_Cl37 = 
        {
            productID: 'SS002',
            colorID: '#000080',
        };
        const Pr_Cl37 = await Pr_Cl.create(newPr_Cl37);
        console.log('Pr_Cl37 created: ', Pr_Cl37.toJSON());
        const newPr_Cl38 = 
        {
            productID: 'SS002',
            colorID: '#FFFF00',
        };
        const Pr_Cl38 = await Pr_Cl.create(newPr_Cl38);
        console.log('Pr_Cl38 created: ', Pr_Cl38.toJSON());
        const newPr_Cl39 = 
        {
            productID: 'SS003',
            colorID: '#228B22',
        };
        const Pr_Cl39 = await Pr_Cl.create(newPr_Cl39);
        console.log('Pr_Cl39 created: ', Pr_Cl39.toJSON());
        const newPr_Cl40 = 
        {
            productID: 'SS003',
            colorID: '#000080',
        };
        const Pr_Cl40 = await Pr_Cl.create(newPr_Cl40);
        console.log('Pr_Cl40 created: ', Pr_Cl40.toJSON());
        const newPr_Cl41 = 
        {
            productID: 'SS003',
            colorID: '#FFFFF0',
        };
        const Pr_Cl41 = await Pr_Cl.create(newPr_Cl41);
        console.log('Pr_Cl41 created: ', Pr_Cl41.toJSON());
        /* ------------------------------------------------*/
        const newPr_Cl100 = 
        {
            productID: 'JK*001',
            colorID: '#000000',
        };
        const Pr_Cl100 = await Pr_Cl.create(newPr_Cl100);
        console.log('Pr_Cl100 created: ', Pr_Cl100.toJSON());
        const newPr_Cl101 = 
        {
            productID: 'JK*001',
            colorID: '#A52A2A',
        };
        const Pr_Cl101 = await Pr_Cl.create(newPr_Cl101);
        console.log('Pr_Cl101 created: ', Pr_Cl101.toJSON());
        const newPr_Cl102 = 
        {
            productID: 'JK*002',
            colorID: '#000000',
        };
        const Pr_Cl102 = await Pr_Cl.create(newPr_Cl102);
        console.log('Pr_Cl102 created: ', Pr_Cl102.toJSON());
        const newPr_Cl103 = 
        {
            productID: 'JK*003',
            colorID: '#000000',
        };
        const Pr_Cl103 = await Pr_Cl.create(newPr_Cl103);
        console.log('Pr_Cl103 created: ', Pr_Cl103.toJSON());
        const newPr_Cl104 = 
        {
            productID: 'JK*003',
            colorID: '#9ACD32',
        };
        const Pr_Cl104 = await Pr_Cl.create(newPr_Cl104);
        console.log('Pr_Cl104 created: ', Pr_Cl104.toJSON());
        const newPr_Cl105 = 
        {
            productID: 'JK*003',
            colorID: '#FFA500',
        };
        const Pr_Cl105 = await Pr_Cl.create(newPr_Cl105);
        console.log('Pr_Cl105 created: ', Pr_Cl105.toJSON());
        const newPr_Cl106 = 
        {
            productID: 'Dr001',
            colorID: '#000000',
        };
        const Pr_Cl106 = await Pr_Cl.create(newPr_Cl106);
        console.log('Pr_Cl106 created: ', Pr_Cl106.toJSON());
        const newPr_Cl107 = 
        {
            productID: 'Dr002',
            colorID: '#F0E68C',
        };
        const Pr_Cl107 = await Pr_Cl.create(newPr_Cl107);
        console.log('Pr_Cl107 created: ', Pr_Cl107.toJSON());
        const newPr_Cl108 = 
        {
            productID: 'Dr002',
            colorID: '#000080',
        };
        const Pr_Cl108 = await Pr_Cl.create(newPr_Cl108);
        console.log('Pr_Cl108 created: ', Pr_Cl108.toJSON());
        const newPr_Cl109 = 
        {
            productID: 'Dr003',
            colorID: '#006400',
        };
        const Pr_Cl109 = await Pr_Cl.create(newPr_Cl109);
        console.log('Pr_Cl109 created: ', Pr_Cl109.toJSON());


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