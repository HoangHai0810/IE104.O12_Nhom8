const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Product_Size');

const sequelize = new Sequelize(config.development);

const Pr_Size = UserModel(sequelize, Sequelize.DataTypes);

async function insertPr_Size()
{
    try
    {
        await sequelize.sync();
        const newSize1 = 
        {
            productID: 'TS001',
            sizeID: 'S01'
        };
        const Ns1 = await Pr_Size.create(newSize1);
        console.log('Ns1 created: ', Ns1.toJSON());
        const newSize2 = 
        {
            productID: 'TS001',
            sizeID: 'M01'
        };
        const Ns2 = await Pr_Size.create(newSize2);
        console.log('Ns2 created: ', Ns2.toJSON());
        const newSize3 = 
        {
            productID: 'TS001',
            sizeID: 'L01'
        };
        const Ns3 = await Pr_Size.create(newSize3);
        console.log('Ns3 created: ', Ns3.toJSON());
        const newSize4 = 
        {
            productID: 'TS001',
            sizeID: 'XL01'
        };
        const Ns4 = await Pr_Size.create(newSize4);
        console.log('Ns4 created: ', Ns4.toJSON());
        const newSize5 = 
        {
            productID: 'TS002',
            sizeID: 'S01'
        };
        const Ns5 = await Pr_Size.create(newSize5);
        console.log('Ns5 created: ', Ns5.toJSON());
        const newSize6 = 
        {
            productID: 'TS002',
            sizeID: 'M01'
        };
        const Ns6 = await Pr_Size.create(newSize6);
        console.log('Ns6 created: ', Ns6.toJSON());
        const newSize7 = 
        {
            productID: 'TS002',
            sizeID: 'L01'
        };
        const Ns7 = await Pr_Size.create(newSize7);
        console.log('Ns7 created: ', Ns7.toJSON());
        const newSize8 = 
        {
            productID: 'TS002',
            sizeID: 'XL01'
        };
        const Ns8 = await Pr_Size.create(newSize8);
        console.log('Ns8 created: ', Ns8.toJSON());
        const newSize9 = 
        {
            productID: 'JK001',
            sizeID: 'S01'
        };
        const Ns9 = await Pr_Size.create(newSize9);
        console.log('Ns9 created: ', Ns9.toJSON());
        const newSize10 = 
        {
            productID: 'JK001',
            sizeID: 'M01'
        };
        const Ns10 = await Pr_Size.create(newSize10);
        console.log('Ns10 created: ', Ns10.toJSON());
        const newSize11 = 
        {
            productID: 'JK001',
            sizeID: 'L01'
        };
        const Ns11 = await Pr_Size.create(newSize11);
        console.log('Ns11 created: ', Ns11.toJSON());
        const newSize12 = 
        {
            productID: 'JK001',
            sizeID: 'XL01'
        };
        const Ns12 = await Pr_Size.create(newSize12);
        console.log('Ns12 created: ', Ns12.toJSON());
        const newSize13 = 
        {
            productID: 'P001',
            sizeID: 'S01'
        };
        const Ns13 = await Pr_Size.create(newSize13);
        console.log('Ns13 created: ', Ns13.toJSON());
        const newSize14 = 
        {
            productID: 'P001',
            sizeID: 'M01'
        };
        const Ns14 = await Pr_Size.create(newSize14);
        console.log('Ns14 created: ', Ns14.toJSON());
        const newSize15 = 
        {
            productID: 'P001',
            sizeID: 'L01'
        };
        const Ns15 = await Pr_Size.create(newSize15);
        console.log('Ns15 created: ', Ns15.toJSON());
        const newSize16 = 
        {
            productID: 'P001',
            sizeID: 'XL01'
        };
        const Ns16 = await Pr_Size.create(newSize16);
        console.log('Ns16 created: ', Ns16.toJSON());
        const newSize17 = 
        {
            productID: 'J001',
            sizeID: 'S01'
        };
        const Ns17 = await Pr_Size.create(newSize17);
        console.log('Ns17 created: ', Ns17.toJSON());
        const newSize18 = 
        {
            productID: 'J001',
            sizeID: 'M01'
        };
        const Ns18 = await Pr_Size.create(newSize18);
        console.log('Ns18 created: ', Ns18.toJSON());
        const newSize19 = 
        {
            productID: 'J001',
            sizeID: 'L01'
        };
        const Ns19 = await Pr_Size.create(newSize19);
        console.log('Ns19 created: ', Ns19.toJSON());
        const newSize20 = 
        {
            productID: 'J001',
            sizeID: 'XL01'
        };
        const Ns20 = await Pr_Size.create(newSize20);
        console.log('Ns20 created: ', Ns20.toJSON());
        const newSize21 = 
        {
            productID: 'J002',
            sizeID: 'S01'
        };
        const Ns21 = await Pr_Size.create(newSize21);
        console.log('Ns21 created: ', Ns21.toJSON());
        const newSize22 = 
        {
            productID: 'J002',
            sizeID: 'M01'
        };
        const Ns22 = await Pr_Size.create(newSize22);
        console.log('Ns22 created: ', Ns22.toJSON());
        const newSize23 = 
        {
            productID: 'J002',
            sizeID: 'L01'
        };
        const Ns23 = await Pr_Size.create(newSize23);
        console.log('Ns23 created: ', Ns23.toJSON());
        const newSize24 = 
        {
            productID: 'J002',
            sizeID: 'XL01'
        };
        const Ns24 = await Pr_Size.create(newSize24);
        console.log('Ns24 created: ', Ns24.toJSON());
        const newSize25 = 
        {
            productID: 'TS003',
            sizeID: 'M01'
        };
        const Ns25 = await Pr_Size.create(newSize25);
        console.log('Ns25 created: ', Ns25.toJSON());
        const newSize26 = 
        {
            productID: 'TS003',
            sizeID: 'XL01'
        };
        const Ns26 = await Pr_Size.create(newSize26);
        console.log('Ns26 created: ', Ns26.toJSON());
        const newSize27 = 
        {
            productID: 'JK002',
            sizeID: 'S01'
        };
        const Ns27 = await Pr_Size.create(newSize27);
        console.log('Ns27 created: ', Ns27.toJSON());
        const newSize28 = 
        {
            productID: 'JK002',
            sizeID: 'M01'
        };
        const Ns28 = await Pr_Size.create(newSize28);
        console.log('Ns28 created: ', Ns28.toJSON());
        const newSize29 = 
        {
            productID: 'JK002',
            sizeID: 'L01'
        };
        const Ns29 = await Pr_Size.create(newSize29);
        console.log('Ns29 created: ', Ns29.toJSON());
        const newSize30 = 
        {
            productID: 'JK002',
            sizeID: 'XL01'
        };
        const Ns30 = await Pr_Size.create(newSize30);
        console.log('Ns30 created: ', Ns30.toJSON());

        const newSize31 = 
        {
            productID: 'JK003',
            sizeID: 'S01'
        };
        const Ns31 = await Pr_Size.create(newSize31);
        console.log('Ns31 created: ', Ns31.toJSON());
        const newSize32 = 
        {
            productID: 'JK003',
            sizeID: 'M01'
        };
        const Ns32 = await Pr_Size.create(newSize32);
        console.log('Ns32 created: ', Ns32.toJSON());
        const newSize33 = 
        {
            productID: 'JK003',
            sizeID: 'L01'
        };
        const Ns33 = await Pr_Size.create(newSize33);
        console.log('Ns33 created: ', Ns33.toJSON());
        const newSize34 = 
        {
            productID: 'JK003',
            sizeID: 'XL01'
        };
        const Ns34 = await Pr_Size.create(newSize34);
        console.log('Ns34 created: ', Ns34.toJSON());
        const newSize35 = 
        {
            productID: 'J003',
            sizeID: 'S01'
        };
        const Ns35 = await Pr_Size.create(newSize35);
        console.log('Ns35 created: ', Ns35.toJSON());
        const newSize36 = 
        {
            productID: 'J003',
            sizeID: 'M01'
        };
        const Ns36 = await Pr_Size.create(newSize36);
        console.log('Ns36 created: ', Ns36.toJSON());
        const newSize37 = 
        {
            productID: 'J003',
            sizeID: 'L01'
        };
        const Ns37 = await Pr_Size.create(newSize37);
        console.log('Ns37 created: ', Ns37.toJSON());
        const newSize38 = 
        {
            productID: 'J003',
            sizeID: 'XL01'
        };
        const Ns38 = await Pr_Size.create(newSize38);
        console.log('Ns38 created: ', Ns38.toJSON());
        const newSize39 = 
        {
            productID: 'P002',
            sizeID: 'S01'
        };
        const Ns39 = await Pr_Size.create(newSize39);
        console.log('Ns39 created: ', Ns39.toJSON());
        const newSize40 = 
        {
            productID: 'P002',
            sizeID: 'M01'
        };
        const Ns40 = await Pr_Size.create(newSize40);
        console.log('Ns40 created: ', Ns40.toJSON());
        const newSize41 = 
        {
            productID: 'P002',
            sizeID: 'L01'
        };
        const Ns41 = await Pr_Size.create(newSize41);
        console.log('Ns41 created: ', Ns41.toJSON());
        const newSize42 = 
        {
            productID: 'P002',
            sizeID: 'XL01'
        };
        const Ns42 = await Pr_Size.create(newSize42);
        console.log('Ns42 created: ', Ns42.toJSON());
        const newSize43 = 
        {
            productID: 'P003',
            sizeID: 'S01'
        };
        const Ns43 = await Pr_Size.create(newSize43);
        console.log('Ns43 created: ', Ns43.toJSON());
        const newSize44 = 
        {
            productID: 'P003',
            sizeID: 'M01'
        };
        const Ns44 = await Pr_Size.create(newSize44);
        console.log('Ns44 created: ', Ns44.toJSON());
        const newSize45 = 
        {
            productID: 'P003',
            sizeID: 'L01'
        };
        const Ns45 = await Pr_Size.create(newSize45);
        console.log('Ns45 created: ', Ns45.toJSON());
        const newSize46 = 
        {
            productID: 'P003',
            sizeID: 'XL01'
        };
        const Ns46 = await Pr_Size.create(newSize46);
        console.log('Ns46 created: ', Ns46.toJSON());
        const newSize47 = 
        {
            productID: 'SS001',
            sizeID: 'S01'
        };
        const Ns47 = await Pr_Size.create(newSize47);
        console.log('Ns47 created: ', Ns47.toJSON());
        const newSize48 = 
        {
            productID: 'SS001',
            sizeID: 'M01'
        };
        const Ns48 = await Pr_Size.create(newSize48);
        console.log('Ns48 created: ', Ns48.toJSON());
        const newSize49 = 
        {
            productID: 'SS001',
            sizeID: 'L01'
        };
        const Ns49 = await Pr_Size.create(newSize49);
        console.log('Ns49 created: ', Ns49.toJSON());
        const newSize50 = 
        {
            productID: 'SS001',
            sizeID: 'XL01'
        };
        const Ns50 = await Pr_Size.create(newSize50);
        console.log('Ns50 created: ', Ns50.toJSON());
        const newSize51 = 
        {
            productID: 'SS002',
            sizeID: 'S01'
        };
        const Ns51 = await Pr_Size.create(newSize51);
        console.log('Ns51 created: ', Ns51.toJSON());
        const newSize52 = 
        {
            productID: 'SS002',
            sizeID: 'M01'
        };
        const Ns52 = await Pr_Size.create(newSize52);
        console.log('Ns52 created: ', Ns52.toJSON());
        const newSize53 = 
        {
            productID: 'SS002',
            sizeID: 'L01'
        };
        const Ns53 = await Pr_Size.create(newSize53);
        console.log('Ns53 created: ', Ns53.toJSON());
        const newSize54 = 
        {
            productID: 'SS002',
            sizeID: 'XL01'
        };
        const Ns54 = await Pr_Size.create(newSize54);
        console.log('Ns54 created: ', Ns54.toJSON());
        const newSize55 = 
        {
            productID: 'SS003',
            sizeID: 'S01'
        };
        const Ns55 = await Pr_Size.create(newSize55);
        console.log('Ns55 created: ', Ns55.toJSON());
        const newSize56 = 
        {
            productID: 'SS003',
            sizeID: 'M01'
        };
        const Ns56 = await Pr_Size.create(newSize56);
        console.log('Ns56 created: ', Ns56.toJSON());
        const newSize57 = 
        {
            productID: 'SS003',
            sizeID: 'L01'
        };
        const Ns57 = await Pr_Size.create(newSize57);
        console.log('Ns57 created: ', Ns57.toJSON());
        const newSize58 = 
        {
            productID: 'SS003',
            sizeID: 'XL01'
        };
        const Ns58 = await Pr_Size.create(newSize58);
        console.log('Ns58 created: ', Ns58.toJSON());
        /*--------------------------------------------*/
        const newSize100 = 
        {
            productID: 'JK*001',
            sizeID: 'XS02'
        };
        const Ns100 = await Pr_Size.create(newSize100);
        console.log('Ns100 created: ', Ns100.toJSON());
        const newSize101 = 
        {
            productID: 'JK*001',
            sizeID: 'S02'
        };
        const Ns101 = await Pr_Size.create(newSize101);
        console.log('Ns101 created: ', Ns101.toJSON());
        const newSize102 = 
        {
            productID: 'JK*001',
            sizeID: 'M02'
        };
        const Ns102 = await Pr_Size.create(newSize102);
        console.log('Ns102 created: ', Ns102.toJSON());
        const newSize103 = 
        {
            productID: 'JK*001',
            sizeID: 'L02'
        };
        const Ns103 = await Pr_Size.create(newSize103);
        console.log('Ns103 created: ', Ns103.toJSON());
        const newSize104 = 
        {
            productID: 'JK*002',
            sizeID: 'XS02'
        };
        const Ns104 = await Pr_Size.create(newSize104);
        console.log('Ns104 created: ', Ns104.toJSON());
        const newSize105 = 
        {
            productID: 'JK*002',
            sizeID: 'S02'
        };
        const Ns105 = await Pr_Size.create(newSize105);
        console.log('Ns105 created: ', Ns105.toJSON());
        const newSize106 = 
        {
            productID: 'JK*002',
            sizeID: 'M02'
        };
        const Ns106 = await Pr_Size.create(newSize106);
        console.log('Ns106 created: ', Ns106.toJSON());
        const newSize107 = 
        {
            productID: 'JK*002',
            sizeID: 'L02'
        };
        const Ns107 = await Pr_Size.create(newSize107);
        console.log('Ns107 created: ', Ns107.toJSON());
        const newSize108 = 
        {
            productID: 'JK*003',
            sizeID: 'XS02'
        };
        const Ns108 = await Pr_Size.create(newSize108);
        console.log('Ns108 created: ', Ns108.toJSON());
        const newSize109 = 
        {
            productID: 'JK*003',
            sizeID: 'S02'
        };
        const Ns109 = await Pr_Size.create(newSize109);
        console.log('Ns109 created: ', Ns109.toJSON());
        const newSize110 = 
        {
            productID: 'JK*003',
            sizeID: 'M02'
        };
        const Ns110 = await Pr_Size.create(newSize110);
        console.log('Ns110 created: ', Ns110.toJSON());
        const newSize111 = 
        {
            productID: 'JK*003',
            sizeID: 'L02'
        };
        const Ns111 = await Pr_Size.create(newSize111);
        console.log('Ns111 created: ', Ns111.toJSON());
        const newSize112 = 
        {
            productID: 'Dr001',
            sizeID: 'S02'
        };
        const Ns112 = await Pr_Size.create(newSize112);
        console.log('Ns112 created: ', Ns112.toJSON());
        const newSize113 = 
        {
            productID: 'Dr001',
            sizeID: 'M02'
        };
        const Ns113 = await Pr_Size.create(newSize113);
        console.log('Ns113 created: ', Ns113.toJSON());
        const newSize114 = 
        {
            productID: 'Dr001',
            sizeID: 'L02'
        };
        const Ns114 = await Pr_Size.create(newSize114);
        console.log('Ns114 created: ', Ns114.toJSON());
        const newSize115 = 
        {
            productID: 'Dr002',
            sizeID: 'XS02'
        };
        const Ns115 = await Pr_Size.create(newSize115);
        console.log('Ns115 created: ', Ns115.toJSON());
        const newSize116 = 
        {
            productID: 'Dr002',
            sizeID: 'S02'
        };
        const Ns116 = await Pr_Size.create(newSize116);
        console.log('Ns116 created: ', Ns116.toJSON());
        const newSize117 = 
        {
            productID: 'Dr002',
            sizeID: 'M02'
        };
        const Ns117 = await Pr_Size.create(newSize117);
        console.log('Ns117 created: ', Ns117.toJSON());
        const newSize118 = 
        {
            productID: 'Dr002',
            sizeID: 'L02'
        };
        const Ns118 = await Pr_Size.create(newSize118);
        console.log('Ns118 created: ', Ns118.toJSON());
        const newSize119 = 
        {
            productID: 'Dr003',
            sizeID: 'XS02'
        };
        const Ns119 = await Pr_Size.create(newSize119);
        console.log('Ns119 created: ', Ns119.toJSON());
        const newSize120 = 
        {
            productID: 'Dr003',
            sizeID: 'S02'
        };
        const Ns120 = await Pr_Size.create(newSize120);
        console.log('Ns120 created: ', Ns120.toJSON());
        const newSize121 = 
        {
            productID: 'Dr003',
            sizeID: 'M02'
        };
        const Ns121 = await Pr_Size.create(newSize121);
        console.log('Ns121 created: ', Ns121.toJSON());
        const newSize122 = 
        {
            productID: 'Dr003',
            sizeID: 'L02'
        };
        const Ns122 = await Pr_Size.create(newSize122);
        console.log('Ns122 created: ', Ns122.toJSON());
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
insertPr_Size();