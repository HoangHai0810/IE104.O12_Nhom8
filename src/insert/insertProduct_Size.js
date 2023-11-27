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
            productID: 'MTS001',
            sizeID: 'S01'
        };
        const Ns1 = await Pr_Size.create(newSize1);
        console.log('Ns1 created: ', Ns1.toJSON());
        const newSize2 = 
        {
            productID: 'MTS001',
            sizeID: 'M01'
        };
        const Ns2 = await Pr_Size.create(newSize2);
        console.log('Ns2 created: ', Ns2.toJSON());
        const newSize3 = 
        {
            productID: 'MTS001',
            sizeID: 'L01'
        };
        const Ns3 = await Pr_Size.create(newSize3);
        console.log('Ns3 created: ', Ns3.toJSON());
        const newSize4 = 
        {
            productID: 'MTS001',
            sizeID: 'XL01'
        };
        const Ns4 = await Pr_Size.create(newSize4);
        console.log('Ns4 created: ', Ns4.toJSON());
        const newSize5 = 
        {
            productID: 'MTS002',
            sizeID: 'S01'
        };
        const Ns5 = await Pr_Size.create(newSize5);
        console.log('Ns5 created: ', Ns5.toJSON());
        const newSize6 = 
        {
            productID: 'MTS002',
            sizeID: 'M01'
        };
        const Ns6 = await Pr_Size.create(newSize6);
        console.log('Ns6 created: ', Ns6.toJSON());
        const newSize7 = 
        {
            productID: 'MTS002',
            sizeID: 'L01'
        };
        const Ns7 = await Pr_Size.create(newSize7);
        console.log('Ns7 created: ', Ns7.toJSON());
        const newSize8 = 
        {
            productID: 'MTS002',
            sizeID: 'XL01'
        };
        const Ns8 = await Pr_Size.create(newSize8);
        console.log('Ns8 created: ', Ns8.toJSON());
        const newSize9 = 
        {
            productID: 'MJK001',
            sizeID: 'S01'
        };
        const Ns9 = await Pr_Size.create(newSize9);
        console.log('Ns9 created: ', Ns9.toJSON());
        const newSize10 = 
        {
            productID: 'MJK001',
            sizeID: 'M01'
        };
        const Ns10 = await Pr_Size.create(newSize10);
        console.log('Ns10 created: ', Ns10.toJSON());
        const newSize11 = 
        {
            productID: 'MJK001',
            sizeID: 'L01'
        };
        const Ns11 = await Pr_Size.create(newSize11);
        console.log('Ns11 created: ', Ns11.toJSON());
        const newSize12 = 
        {
            productID: 'MJK001',
            sizeID: 'XL01'
        };
        const Ns12 = await Pr_Size.create(newSize12);
        console.log('Ns12 created: ', Ns12.toJSON());
        const newSize13 = 
        {
            productID: 'MK001',
            sizeID: 'S01'
        };
        const Ns13 = await Pr_Size.create(newSize13);
        console.log('Ns13 created: ', Ns13.toJSON());
        const newSize14 = 
        {
            productID: 'MK001',
            sizeID: 'M01'
        };
        const Ns14 = await Pr_Size.create(newSize14);
        console.log('Ns14 created: ', Ns14.toJSON());
        const newSize15 = 
        {
            productID: 'MK001',
            sizeID: 'L01'
        };
        const Ns15 = await Pr_Size.create(newSize15);
        console.log('Ns15 created: ', Ns15.toJSON());
        const newSize16 = 
        {
            productID: 'MK001',
            sizeID: 'XL01'
        };
        const Ns16 = await Pr_Size.create(newSize16);
        console.log('Ns16 created: ', Ns16.toJSON());
        const newSize17 = 
        {
            productID: 'MJ001',
            sizeID: 'S01'
        };
        const Ns17 = await Pr_Size.create(newSize17);
        console.log('Ns17 created: ', Ns17.toJSON());
        const newSize18 = 
        {
            productID: 'MJ001',
            sizeID: 'M01'
        };
        const Ns18 = await Pr_Size.create(newSize18);
        console.log('Ns18 created: ', Ns18.toJSON());
        const newSize19 = 
        {
            productID: 'MJ001',
            sizeID: 'L01'
        };
        const Ns19 = await Pr_Size.create(newSize19);
        console.log('Ns19 created: ', Ns19.toJSON());
        const newSize20 = 
        {
            productID: 'MJ001',
            sizeID: 'XL01'
        };
        const Ns20 = await Pr_Size.create(newSize20);
        console.log('Ns20 created: ', Ns20.toJSON());
        const newSize21 = 
        {
            productID: 'MJ002',
            sizeID: 'S01'
        };
        const Ns21 = await Pr_Size.create(newSize21);
        console.log('Ns21 created: ', Ns21.toJSON());
        const newSize22 = 
        {
            productID: 'MJ002',
            sizeID: 'M01'
        };
        const Ns22 = await Pr_Size.create(newSize22);
        console.log('Ns22 created: ', Ns22.toJSON());
        const newSize23 = 
        {
            productID: 'MJ002',
            sizeID: 'L01'
        };
        const Ns23 = await Pr_Size.create(newSize23);
        console.log('Ns23 created: ', Ns23.toJSON());
        const newSize24 = 
        {
            productID: 'MJ002',
            sizeID: 'XL01'
        };
        const Ns24 = await Pr_Size.create(newSize24);
        console.log('Ns24 created: ', Ns24.toJSON());
        const newSize25 = 
        {
            productID: 'MTS003',
            sizeID: 'M01'
        };
        const Ns25 = await Pr_Size.create(newSize25);
        console.log('Ns25 created: ', Ns25.toJSON());
        const newSize26 = 
        {
            productID: 'MTS003',
            sizeID: 'XL01'
        };
        const Ns26 = await Pr_Size.create(newSize26);
        console.log('Ns26 created: ', Ns26.toJSON());
        const newSize27 = 
        {
            productID: 'MJK002',
            sizeID: 'S01'
        };
        const Ns27 = await Pr_Size.create(newSize27);
        console.log('Ns27 created: ', Ns27.toJSON());
        const newSize28 = 
        {
            productID: 'MJK002',
            sizeID: 'M01'
        };
        const Ns28 = await Pr_Size.create(newSize28);
        console.log('Ns28 created: ', Ns28.toJSON());
        const newSize29 = 
        {
            productID: 'MJK002',
            sizeID: 'L01'
        };
        const Ns29 = await Pr_Size.create(newSize29);
        console.log('Ns29 created: ', Ns29.toJSON());
        const newSize30 = 
        {
            productID: 'MJK002',
            sizeID: 'XL01'
        };
        const Ns30 = await Pr_Size.create(newSize30);
        console.log('Ns30 created: ', Ns30.toJSON());

        const newSize31 = 
        {
            productID: 'MJK003',
            sizeID: 'S01'
        };
        const Ns31 = await Pr_Size.create(newSize31);
        console.log('Ns31 created: ', Ns31.toJSON());
        const newSize32 = 
        {
            productID: 'MJK003',
            sizeID: 'M01'
        };
        const Ns32 = await Pr_Size.create(newSize32);
        console.log('Ns32 created: ', Ns32.toJSON());
        const newSize33 = 
        {
            productID: 'MJK003',
            sizeID: 'L01'
        };
        const Ns33 = await Pr_Size.create(newSize33);
        console.log('Ns33 created: ', Ns33.toJSON());
        const newSize34 = 
        {
            productID: 'MJK003',
            sizeID: 'XL01'
        };
        const Ns34 = await Pr_Size.create(newSize34);
        console.log('Ns34 created: ', Ns34.toJSON());
        const newSize35 = 
        {
            productID: 'MJ003',
            sizeID: 'S01'
        };
        const Ns35 = await Pr_Size.create(newSize35);
        console.log('Ns35 created: ', Ns35.toJSON());
        const newSize36 = 
        {
            productID: 'MJ003',
            sizeID: 'M01'
        };
        const Ns36 = await Pr_Size.create(newSize36);
        console.log('Ns36 created: ', Ns36.toJSON());
        const newSize37 = 
        {
            productID: 'MJ003',
            sizeID: 'L01'
        };
        const Ns37 = await Pr_Size.create(newSize37);
        console.log('Ns37 created: ', Ns37.toJSON());
        const newSize38 = 
        {
            productID: 'MJ003',
            sizeID: 'XL01'
        };
        const Ns38 = await Pr_Size.create(newSize38);
        console.log('Ns38 created: ', Ns38.toJSON());
        const newSize39 = 
        {
            productID: 'MK002',
            sizeID: 'S01'
        };
        const Ns39 = await Pr_Size.create(newSize39);
        console.log('Ns39 created: ', Ns39.toJSON());
        const newSize40 = 
        {
            productID: 'MK002',
            sizeID: 'M01'
        };
        const Ns40 = await Pr_Size.create(newSize40);
        console.log('Ns40 created: ', Ns40.toJSON());
        const newSize41 = 
        {
            productID: 'MK002',
            sizeID: 'L01'
        };
        const Ns41 = await Pr_Size.create(newSize41);
        console.log('Ns41 created: ', Ns41.toJSON());
        const newSize42 = 
        {
            productID: 'MK002',
            sizeID: 'XL01'
        };
        const Ns42 = await Pr_Size.create(newSize42);
        console.log('Ns42 created: ', Ns42.toJSON());
        const newSize43 = 
        {
            productID: 'MK003',
            sizeID: 'S01'
        };
        const Ns43 = await Pr_Size.create(newSize43);
        console.log('Ns43 created: ', Ns43.toJSON());
        const newSize44 = 
        {
            productID: 'MK003',
            sizeID: 'M01'
        };
        const Ns44 = await Pr_Size.create(newSize44);
        console.log('Ns44 created: ', Ns44.toJSON());
        const newSize45 = 
        {
            productID: 'MK003',
            sizeID: 'L01'
        };
        const Ns45 = await Pr_Size.create(newSize45);
        console.log('Ns45 created: ', Ns45.toJSON());
        const newSize46 = 
        {
            productID: 'MK003',
            sizeID: 'XL01'
        };
        const Ns46 = await Pr_Size.create(newSize46);
        console.log('Ns46 created: ', Ns46.toJSON());
        const newSize47 = 
        {
            productID: 'MSS001',
            sizeID: 'S01'
        };
        const Ns47 = await Pr_Size.create(newSize47);
        console.log('Ns47 created: ', Ns47.toJSON());
        const newSize48 = 
        {
            productID: 'MSS001',
            sizeID: 'M01'
        };
        const Ns48 = await Pr_Size.create(newSize48);
        console.log('Ns48 created: ', Ns48.toJSON());
        const newSize49 = 
        {
            productID: 'MSS001',
            sizeID: 'L01'
        };
        const Ns49 = await Pr_Size.create(newSize49);
        console.log('Ns49 created: ', Ns49.toJSON());
        const newSize50 = 
        {
            productID: 'MSS001',
            sizeID: 'XL01'
        };
        const Ns50 = await Pr_Size.create(newSize50);
        console.log('Ns50 created: ', Ns50.toJSON());
        const newSize51 = 
        {
            productID: 'MSS002',
            sizeID: 'S01'
        };
        const Ns51 = await Pr_Size.create(newSize51);
        console.log('Ns51 created: ', Ns51.toJSON());
        const newSize52 = 
        {
            productID: 'MSS002',
            sizeID: 'M01'
        };
        const Ns52 = await Pr_Size.create(newSize52);
        console.log('Ns52 created: ', Ns52.toJSON());
        const newSize53 = 
        {
            productID: 'MSS002',
            sizeID: 'L01'
        };
        const Ns53 = await Pr_Size.create(newSize53);
        console.log('Ns53 created: ', Ns53.toJSON());
        const newSize54 = 
        {
            productID: 'MSS002',
            sizeID: 'XL01'
        };
        const Ns54 = await Pr_Size.create(newSize54);
        console.log('Ns54 created: ', Ns54.toJSON());
        const newSize55 = 
        {
            productID: 'MSS003',
            sizeID: 'S01'
        };
        const Ns55 = await Pr_Size.create(newSize55);
        console.log('Ns55 created: ', Ns55.toJSON());
        const newSize56 = 
        {
            productID: 'MSS003',
            sizeID: 'M01'
        };
        const Ns56 = await Pr_Size.create(newSize56);
        console.log('Ns56 created: ', Ns56.toJSON());
        const newSize57 = 
        {
            productID: 'MSS003',
            sizeID: 'L01'
        };
        const Ns57 = await Pr_Size.create(newSize57);
        console.log('Ns57 created: ', Ns57.toJSON());
        const newSize58 = 
        {
            productID: 'MSS003',
            sizeID: 'XL01'
        };
        const Ns58 = await Pr_Size.create(newSize58);
        console.log('Ns58 created: ', Ns58.toJSON());
        const newSize59 = 
        {
            productID: 'MTT001',
            sizeID: 'S01'
        };
        const Ns59 = await Pr_Size.create(newSize59);
        console.log('Ns59 created: ', Ns59.toJSON());
        const newSize60 = 
        {
            productID: 'MTT001',
            sizeID: 'M01'
        };
        const Ns60 = await Pr_Size.create(newSize60);
        console.log('Ns60 created: ', Ns60.toJSON());
        const newSize61 = 
        {
            productID: 'MTT001',
            sizeID: 'L01'
        };
        const Ns61 = await Pr_Size.create(newSize61);
        console.log('Ns61 created: ', Ns61.toJSON());
        const newSize62 = 
        {
            productID: 'MTT001',
            sizeID: 'XL01'
        };
        const Ns62 = await Pr_Size.create(newSize62);
        console.log('Ns62 created: ', Ns62.toJSON());
        const newSize63 = 
        {
            productID: 'MTT002',
            sizeID: 'S01'
        };
        const Ns63 = await Pr_Size.create(newSize63);
        console.log('Ns63 created: ', Ns63.toJSON());
        const newSize64 = 
        {
            productID: 'MTT002',
            sizeID: 'M01'
        };
        const Ns64 = await Pr_Size.create(newSize64);
        console.log('Ns64 created: ', Ns64.toJSON());
        const newSize65 = 
        {
            productID: 'MTT002',
            sizeID: 'L01'
        };
        const Ns65 = await Pr_Size.create(newSize65);
        console.log('Ns65 created: ', Ns65.toJSON());
        const newSize66 = 
        {
            productID: 'MTT002',
            sizeID: 'XL01'
        };
        const Ns66 = await Pr_Size.create(newSize66);
        console.log('Ns66 created: ', Ns66.toJSON());
        const newSize67 = 
        {
            productID: 'MTT003',
            sizeID: 'S01'
        };
        const Ns67 = await Pr_Size.create(newSize67);
        console.log('Ns67 created: ', Ns67.toJSON());
        const newSize68 = 
        {
            productID: 'MTT003',
            sizeID: 'M01'
        };
        const Ns68 = await Pr_Size.create(newSize68);
        console.log('Ns68 created: ', Ns68.toJSON());
        const newSize69 = 
        {
            productID: 'MTT003',
            sizeID: 'L01'
        };
        const Ns69 = await Pr_Size.create(newSize69);
        console.log('Ns69 created: ', Ns69.toJSON());
        const newSize70 = 
        {
            productID: 'MTT003',
            sizeID: 'XL01'
        };
        const Ns70 = await Pr_Size.create(newSize70);
        console.log('Ns70 created: ', Ns70.toJSON());
        const newSize71 = 
        {
            productID: 'MSP001',
            sizeID: 'S01'
        };
        const Ns71 = await Pr_Size.create(newSize71);
        console.log('Ns71 created: ', Ns71.toJSON());
        const newSize72 = 
        {
            productID: 'MSP001',
            sizeID: 'M01'
        };
        const Ns72 = await Pr_Size.create(newSize72);
        console.log('Ns72 created: ', Ns72.toJSON());
        const newSize73 = 
        {
            productID: 'MSP001',
            sizeID: 'L01'
        };
        const Ns73 = await Pr_Size.create(newSize73);
        console.log('Ns73 created: ', Ns73.toJSON());
        const newSize74 = 
        {
            productID: 'MSP001',
            sizeID: 'XL01'
        };
        const Ns74 = await Pr_Size.create(newSize74);
        console.log('Ns74 created: ', Ns74.toJSON());
        const newSize75 = 
        {
            productID: 'MSP002',
            sizeID: 'S01'
        };
        const Ns75 = await Pr_Size.create(newSize75);
        console.log('Ns75 created: ', Ns75.toJSON());
        const newSize76 = 
        {
            productID: 'MSP002',
            sizeID: 'M01'
        };
        const Ns76 = await Pr_Size.create(newSize76);
        console.log('Ns76 created: ', Ns76.toJSON());
        const newSize77 = 
        {
            productID: 'MSP002',
            sizeID: 'L01'
        };
        const Ns77 = await Pr_Size.create(newSize77);
        console.log('Ns77 created: ', Ns77.toJSON());
        const newSize78 = 
        {
            productID: 'MSP002',
            sizeID: 'XL01'
        };
        const Ns78 = await Pr_Size.create(newSize78);
        console.log('Ns78 created: ', Ns78.toJSON());
        const newSize79 = 
        {
            productID: 'MSP003',
            sizeID: 'S01'
        };
        const Ns79 = await Pr_Size.create(newSize79);
        console.log('Ns79 created: ', Ns79.toJSON());
        const newSize80 = 
        {
            productID: 'MSP003',
            sizeID: 'M01'
        };
        const Ns80 = await Pr_Size.create(newSize80);
        console.log('Ns80 created: ', Ns80.toJSON());
        const newSize81 = 
        {
            productID: 'MSP003',
            sizeID: 'L01'
        };
        const Ns81 = await Pr_Size.create(newSize81);
        console.log('Ns81 created: ', Ns81.toJSON());
        const newSize82 = 
        {
            productID: 'MSP003',
            sizeID: 'XL01'
        };
        const Ns82 = await Pr_Size.create(newSize82);
        console.log('Ns82 created: ', Ns82.toJSON());
        const newSize83 = 
        {
            productID: 'MU001',
            sizeID: 'S01'
        };
        const Ns83 = await Pr_Size.create(newSize83);
        console.log('Ns83 created: ', Ns83.toJSON());
        const newSize84 = 
        {
            productID: 'MU001',
            sizeID: 'M01'
        };
        const Ns84 = await Pr_Size.create(newSize84);
        console.log('Ns84 created: ', Ns84.toJSON());
        const newSize85 = 
        {
            productID: 'MU001',
            sizeID: 'L01'
        };
        const Ns85 = await Pr_Size.create(newSize85);
        console.log('Ns85 created: ', Ns85.toJSON());
        const newSize86 = 
        {
            productID: 'MU001',
            sizeID: 'XL01'
        };
        const Ns86 = await Pr_Size.create(newSize86);
        console.log('Ns86 created: ', Ns86.toJSON());
        const newSize87 = 
        {
            productID: 'MU002',
            sizeID: 'S01'
        };
        const Ns87 = await Pr_Size.create(newSize87);
        console.log('Ns87 created: ', Ns87.toJSON());
        const newSize88 = 
        {
            productID: 'MU002',
            sizeID: 'M01'
        };
        const Ns88 = await Pr_Size.create(newSize88);
        console.log('Ns88 created: ', Ns88.toJSON());
        const newSize89 = 
        {
            productID: 'MU002',
            sizeID: 'L01'
        };
        const Ns89 = await Pr_Size.create(newSize89);
        console.log('Ns89 created: ', Ns89.toJSON());
        const newSize90 = 
        {
            productID: 'MU002',
            sizeID: 'XL01'
        };
        const Ns90 = await Pr_Size.create(newSize90);
        console.log('Ns90 created: ', Ns90.toJSON());
        const newSize91 = 
        {
            productID: 'MU003',
            sizeID: 'S01'
        };
        const Ns91 = await Pr_Size.create(newSize91);
        console.log('Ns91 created: ', Ns91.toJSON());
        const newSize92 = 
        {
            productID: 'MU003',
            sizeID: 'M01'
        };
        const Ns92 = await Pr_Size.create(newSize92);
        console.log('Ns92 created: ', Ns92.toJSON());
        const newSize93 = 
        {
            productID: 'MU003',
            sizeID: 'L01'
        };
        const Ns93 = await Pr_Size.create(newSize93);
        console.log('Ns93 created: ', Ns93.toJSON());
        const newSize94 = 
        {
            productID: 'MU003',
            sizeID: 'XL01'
        };
        const Ns94 = await Pr_Size.create(newSize94);
        console.log('Ns94 created: ', Ns94.toJSON());
        /--------------------------------------------/
        const newSize100 = 
        {
            productID: 'WJK001',
            sizeID: 'XS02'
        };
        const Ns100 = await Pr_Size.create(newSize100);
        console.log('Ns100 created: ', Ns100.toJSON());
        const newSize101 = 
        {
            productID: 'WJK001',
            sizeID: 'S02'
        };
        const Ns101 = await Pr_Size.create(newSize101);
        console.log('Ns101 created: ', Ns101.toJSON());
        const newSize102 = 
        {
            productID: 'WJK001',
            sizeID: 'M02'
        };
        const Ns102 = await Pr_Size.create(newSize102);
        console.log('Ns102 created: ', Ns102.toJSON());
        const newSize103 = 
        {
            productID: 'WJK001',
            sizeID: 'L02'
        };
        const Ns103 = await Pr_Size.create(newSize103);
        console.log('Ns103 created: ', Ns103.toJSON());
        const newSize104 = 
        {
            productID: 'WJK002',
            sizeID: 'XS02'
        };
        const Ns104 = await Pr_Size.create(newSize104);
        console.log('Ns104 created: ', Ns104.toJSON());
        const newSize105 = 
        {
            productID: 'WJK002',
            sizeID: 'S02'
        };
        const Ns105 = await Pr_Size.create(newSize105);
        console.log('Ns105 created: ', Ns105.toJSON());
        const newSize106 = 
        {
            productID: 'WJK002',
            sizeID: 'M02'
        };
        const Ns106 = await Pr_Size.create(newSize106);
        console.log('Ns106 created: ', Ns106.toJSON());
        const newSize107 = 
        {
            productID: 'WJK002',
            sizeID: 'L02'
        };
        const Ns107 = await Pr_Size.create(newSize107);
        console.log('Ns107 created: ', Ns107.toJSON());
        const newSize108 = 
        {
            productID: 'WJK003',
            sizeID: 'XS02'
        };
        const Ns108 = await Pr_Size.create(newSize108);
        console.log('Ns108 created: ', Ns108.toJSON());
        const newSize109 = 
        {
            productID: 'WJK003',
            sizeID: 'S02'
        };
        const Ns109 = await Pr_Size.create(newSize109);
        console.log('Ns109 created: ', Ns109.toJSON());
        const newSize110 = 
        {
            productID: 'WJK003',
            sizeID: 'M02'
        };
        const Ns110 = await Pr_Size.create(newSize110);
        console.log('Ns110 created: ', Ns110.toJSON());
        const newSize111 = 
        {
            productID: 'WJK003',
            sizeID: 'L02'
        };
        const Ns111 = await Pr_Size.create(newSize111);
        console.log('Ns111 created: ', Ns111.toJSON());
        const newSize112 = 
        {
            productID: 'WDr001',
            sizeID: 'S02'
        };
        const Ns112 = await Pr_Size.create(newSize112);
        console.log('Ns112 created: ', Ns112.toJSON());
        const newSize113 = 
        {
            productID: 'WDr001',
            sizeID: 'M02'
        };
        const Ns113 = await Pr_Size.create(newSize113);
        console.log('Ns113 created: ', Ns113.toJSON());
        const newSize114 = 
        {
            productID: 'WDr001',
            sizeID: 'L02'
        };
        const Ns114 = await Pr_Size.create(newSize114);
        console.log('Ns114 created: ', Ns114.toJSON());
        const newSize115 = 
        {
            productID: 'WDr002',
            sizeID: 'XS02'
        };
        const Ns115 = await Pr_Size.create(newSize115);
        console.log('Ns115 created: ', Ns115.toJSON());
        const newSize116 = 
        {
            productID: 'WDr002',
            sizeID: 'S02'
        };
        const Ns116 = await Pr_Size.create(newSize116);
        console.log('Ns116 created: ', Ns116.toJSON());
        const newSize117 = 
        {
            productID: 'WDr002',
            sizeID: 'M02'
        };
        const Ns117 = await Pr_Size.create(newSize117);
        console.log('Ns117 created: ', Ns117.toJSON());
        const newSize118 = 
        {
            productID: 'WDr002',
            sizeID: 'L02'
        };
        const Ns118 = await Pr_Size.create(newSize118);
        console.log('Ns118 created: ', Ns118.toJSON());
        const newSize119 = 
        {
            productID: 'WDr003',
            sizeID: 'XS02'
        };
        const Ns119 = await Pr_Size.create(newSize119);
        console.log('Ns119 created: ', Ns119.toJSON());
        const newSize120 = 
        {
            productID: 'WDr003',
            sizeID: 'S02'
        };
        const Ns120 = await Pr_Size.create(newSize120);
        console.log('Ns120 created: ', Ns120.toJSON());
        const newSize121 = 
        {
            productID: 'WDr003',
            sizeID: 'M02'
        };
        const Ns121 = await Pr_Size.create(newSize121);
        console.log('Ns121 created: ', Ns121.toJSON());
        const newSize122 = 
        {
            productID: 'WDr003',
            sizeID: 'L02'
        };
        const Ns122 = await Pr_Size.create(newSize122);
        console.log('Ns122 created: ', Ns122.toJSON());
        const newSize123 = 
        {
            productID: 'WTS001',
            sizeID: 'XS02'
        };
        const Ns123 = await Pr_Size.create(newSize123);
        console.log('Ns123 created: ', Ns123.toJSON());
        const newSize124 = 
        {
            productID: 'WTS001',
            sizeID: 'S02'
        };
        const Ns124 = await Pr_Size.create(newSize124);
        console.log('Ns124 created: ', Ns124.toJSON());
        const newSize125 = 
        {
            productID: 'WTS001',
            sizeID: 'M02'
        };
        const Ns125 = await Pr_Size.create(newSize125);
        console.log('Ns125 created: ', Ns125.toJSON());
        const newSize126 = 
        {
            productID: 'WTS001',
            sizeID: 'L02'
        };
        const Ns126 = await Pr_Size.create(newSize126);
        console.log('Ns126 created: ', Ns126.toJSON());
        const newSize127 = 
        {
            productID: 'WTS002',
            sizeID: 'XS02'
        };
        const Ns127 = await Pr_Size.create(newSize127);
        console.log('Ns127 created: ', Ns127.toJSON());
        const newSize128 = 
        {
            productID: 'WTS002',
            sizeID: 'S02'
        };
        const Ns128 = await Pr_Size.create(newSize128);
        console.log('Ns128 created: ', Ns128.toJSON());
        const newSize129 = 
        {
            productID: 'WTS002',
            sizeID: 'M02'
        };
        const Ns129 = await Pr_Size.create(newSize129);
        console.log('Ns129 created: ', Ns129.toJSON());
        const newSize130 = 
        {
            productID: 'WTS002',
            sizeID: 'L02'
        };
        const Ns130 = await Pr_Size.create(newSize130);
        console.log('Ns130 created: ', Ns130.toJSON());
        const newSize131 = 
        {
            productID: 'WTS003',
            sizeID: 'XS02'
        };
        const Ns131 = await Pr_Size.create(newSize131);
        console.log('Ns131 created: ', Ns131.toJSON());
        const newSize132 = 
        {
            productID: 'WTS003',
            sizeID: 'S02'
        };
        const Ns132 = await Pr_Size.create(newSize132);
        console.log('Ns132 created: ', Ns132.toJSON());
        const newSize133 = 
        {
            productID: 'WTS003',
            sizeID: 'M02'
        };
        const Ns133 = await Pr_Size.create(newSize133);
        console.log('Ns133 created: ', Ns133.toJSON());
        const newSize134 = 
        {
            productID: 'WTS003',
            sizeID: 'L02'
        };
        const Ns134 = await Pr_Size.create(newSize134);
        console.log('Ns134 created: ', Ns134.toJSON());
        const newSize135 = 
        {
            productID: 'WS001',
            sizeID: 'XS02'
        };
        const Ns135 = await Pr_Size.create(newSize135);
        console.log('Ns135 created: ', Ns135.toJSON());
        const newSize136 = 
        {
            productID: 'WS001',
            sizeID: 'S02'
        };
        const Ns136 = await Pr_Size.create(newSize136);
        console.log('Ns136 created: ', Ns136.toJSON());
        const newSize137 = 
        {
            productID: 'WS001',
            sizeID: 'M02'
        };
        const Ns137 = await Pr_Size.create(newSize137);
        console.log('Ns137 created: ', Ns137.toJSON());
        const newSize138 = 
        {
            productID: 'WS001',
            sizeID: 'L02'
        };
        const Ns138 = await Pr_Size.create(newSize138);
        console.log('Ns138 created: ', Ns138.toJSON());
        const newSize139 = 
        {
            productID: 'WS002',
            sizeID: 'XS02'
        };
        const Ns139 = await Pr_Size.create(newSize139);
        console.log('Ns139 created: ', Ns139.toJSON());
        const newSize140 = 
        {
            productID: 'WS002',
            sizeID: 'S02'
        };
        const Ns140 = await Pr_Size.create(newSize140);
        console.log('Ns140 created: ', Ns140.toJSON());
        const newSize141 = 
        {
            productID: 'WS002',
            sizeID: 'M02'
        };
        const Ns141 = await Pr_Size.create(newSize141);
        console.log('Ns141 created: ', Ns141.toJSON());
        const newSize142 = 
        {
            productID: 'WS002',
            sizeID: 'L02'
        };
        const Ns142 = await Pr_Size.create(newSize142);
        console.log('Ns142 created: ', Ns142.toJSON());
        const newSize143 = 
        {
            productID: 'WS003',
            sizeID: 'XS02'
        };
        const Ns143 = await Pr_Size.create(newSize143);
        console.log('Ns143 created: ', Ns143.toJSON());
        const newSize144 = 
        {
            productID: 'WS003',
            sizeID: 'S02'
        };
        const Ns144 = await Pr_Size.create(newSize144);
        console.log('Ns144 created: ', Ns144.toJSON());
        const newSize145 = 
        {
            productID: 'WS003',
            sizeID: 'M02'
        };
        const Ns145 = await Pr_Size.create(newSize145);
        console.log('Ns145 created: ', Ns145.toJSON());
        const newSize146 = 
        {
            productID: 'WS003',
            sizeID: 'L02'
        };
        const Ns146 = await Pr_Size.create(newSize146);
        console.log('Ns146 created: ', Ns146.toJSON());
        const newSize147 = 
        {
            productID: 'WJ001',
            sizeID: 'XS02'
        };
        const Ns147 = await Pr_Size.create(newSize147);
        console.log('Ns147 created: ', Ns147.toJSON());
        const newSize148 = 
        {
            productID: 'WJ001',
            sizeID: 'S02'
        };
        const Ns148 = await Pr_Size.create(newSize148);
        console.log('Ns148 created: ', Ns148.toJSON());
        const newSize149 = 
        {
            productID: 'WJ001',
            sizeID: 'M02'
        };
        const Ns149 = await Pr_Size.create(newSize149);
        console.log('Ns149 created: ', Ns149.toJSON());
        const newSize150 = 
        {
            productID: 'WJ001',
            sizeID: 'L02'
        };
        const Ns150 = await Pr_Size.create(newSize150);
        console.log('Ns150 created: ', Ns150.toJSON());
        const newSize151 = 
        {
            productID: 'WJ002',
            sizeID: 'XS02'
        };
        const Ns151 = await Pr_Size.create(newSize151);
        console.log('Ns151 created: ', Ns151.toJSON());
        const newSize152 = 
        {
            productID: 'WJ002',
            sizeID: 'S02'
        };
        const Ns152 = await Pr_Size.create(newSize152);
        console.log('Ns152 created: ', Ns152.toJSON());
        const newSize153 = 
        {
            productID: 'WJ002',
            sizeID: 'M02'
        };
        const Ns153 = await Pr_Size.create(newSize153);
        console.log('Ns153 created: ', Ns153.toJSON());
        const newSize154 = 
        {
            productID: 'WJ002',
            sizeID: 'L02'
        };
        const Ns154 = await Pr_Size.create(newSize154);
        console.log('Ns154 created: ', Ns154.toJSON());
        const newSize155 = 
        {
            productID: 'WJ003',
            sizeID: 'XS02'
        };
        const Ns155 = await Pr_Size.create(newSize155);
        console.log('Ns155 created: ', Ns155.toJSON());
        const newSize156 = 
        {
            productID: 'WJ003',
            sizeID: 'S02'
        };
        const Ns156 = await Pr_Size.create(newSize156);
        console.log('Ns156 created: ', Ns156.toJSON());
        const newSize157 = 
        {
            productID: 'WJ003',
            sizeID: 'M02'
        };
        const Ns157 = await Pr_Size.create(newSize157);
        console.log('Ns157 created: ', Ns157.toJSON());
        const newSize158 = 
        {
            productID: 'WJ003',
            sizeID: 'L02'
        };
        const Ns158 = await Pr_Size.create(newSize158);
        console.log('Ns158 created: ', Ns158.toJSON());
        const newSize159 = 
        {
            productID: 'WSP001',
            sizeID: 'XS02'
        };
        const Ns159 = await Pr_Size.create(newSize159);
        console.log('Ns159 created: ', Ns159.toJSON());
        const newSize160 = 
        {
            productID: 'WSP001',
            sizeID: 'S02'
        };
        const Ns160 = await Pr_Size.create(newSize160);
        console.log('Ns160 created: ', Ns160.toJSON());
        const newSize161 = 
        {
            productID: 'WSP001',
            sizeID: 'M02'
        };
        const Ns161 = await Pr_Size.create(newSize161);
        console.log('Ns161 created: ', Ns161.toJSON());
        const newSize162 = 
        {
            productID: 'WSP001',
            sizeID: 'L02'
        };
        const Ns162 = await Pr_Size.create(newSize162);
        console.log('Ns162 created: ', Ns162.toJSON());
        const newSize163 = 
        {
            productID: 'WSP002',
            sizeID: 'XS02'
        };
        const Ns163 = await Pr_Size.create(newSize163);
        console.log('Ns163 created: ', Ns163.toJSON());
        const newSize164 = 
        {
            productID: 'WSP002',
            sizeID: 'S02'
        };
        const Ns164 = await Pr_Size.create(newSize164);
        console.log('Ns164 created: ', Ns164.toJSON());
        const newSize165 = 
        {
            productID: 'WSP002',
            sizeID: 'M02'
        };
        const Ns165 = await Pr_Size.create(newSize165);
        console.log('Ns165 created: ', Ns165.toJSON());
        const newSize166 = 
        {
            productID: 'WSP002',
            sizeID: 'L02'
        };
        const Ns166 = await Pr_Size.create(newSize166);
        console.log('Ns166 created: ', Ns166.toJSON());
        const newSize167 = 
        {
            productID: 'WSP003',
            sizeID: 'XS02'
        };
        const Ns167 = await Pr_Size.create(newSize167);
        console.log('Ns167 created: ', Ns167.toJSON());
        const newSize168 = 
        {
            productID: 'WSP003',
            sizeID: 'S02'
        };
        const Ns168 = await Pr_Size.create(newSize168);
        console.log('Ns168 created: ', Ns168.toJSON());
        const newSize169 = 
        {
            productID: 'WSP003',
            sizeID: 'M02'
        };
        const Ns169 = await Pr_Size.create(newSize169);
        console.log('Ns169 created: ', Ns169.toJSON());
        const newSize170 = 
        {
            productID: 'WSP003',
            sizeID: 'L02'
        };
        const Ns170 = await Pr_Size.create(newSize170);
        console.log('Ns170 created: ', Ns170.toJSON());
        const newSize171 = 
        {
            productID: 'WP001',
            sizeID: 'XS02'
        };
        const Ns171 = await Pr_Size.create(newSize171);
        console.log('Ns171 created: ', Ns171.toJSON());
        const newSize172 = 
        {
            productID: 'WP001',
            sizeID: 'S02'
        };
        const Ns172 = await Pr_Size.create(newSize172);
        console.log('Ns172 created: ', Ns172.toJSON());
        const newSize173 = 
        {
            productID: 'WP001',
            sizeID: 'M02'
        };
        const Ns173 = await Pr_Size.create(newSize173);
        console.log('Ns173 created: ', Ns173.toJSON());
        const newSize174 = 
        {
            productID: 'WP001',
            sizeID: 'L02'
        };
        const Ns174 = await Pr_Size.create(newSize174);
        console.log('Ns174 created: ', Ns174.toJSON());
        const newSize175 = 
        {
            productID: 'WP002',
            sizeID: 'XS02'
        };
        const Ns175 = await Pr_Size.create(newSize175);
        console.log('Ns175 created: ', Ns175.toJSON());
        const newSize176 = 
        {
            productID: 'WP002',
            sizeID: 'S02'
        };
        const Ns176 = await Pr_Size.create(newSize176);
        console.log('Ns176 created: ', Ns176.toJSON());
        const newSize177 = 
        {
            productID: 'WP002',
            sizeID: 'M02'
        };
        const Ns177 = await Pr_Size.create(newSize177);
        console.log('Ns177 created: ', Ns177.toJSON());
        const newSize178 = 
        {
            productID: 'WP002',
            sizeID: 'L02'
        };
        const Ns178 = await Pr_Size.create(newSize178);
        console.log('Ns178 created: ', Ns178.toJSON());
        const newSize179 = 
        {
            productID: 'WP003',
            sizeID: 'XS02'
        };
        const Ns179 = await Pr_Size.create(newSize179);
        console.log('Ns179 created: ', Ns179.toJSON());
        const newSize180 = 
        {
            productID: 'WP003',
            sizeID: 'S02'
        };
        const Ns180 = await Pr_Size.create(newSize180);
        console.log('Ns180 created: ', Ns180.toJSON());
        const newSize181 = 
        {
            productID: 'WP003',
            sizeID: 'M02'
        };
        const Ns181 = await Pr_Size.create(newSize181);
        console.log('Ns181 created: ', Ns181.toJSON());
        const newSize182 = 
        {
            productID: 'WP003',
            sizeID: 'L02'
        };
        const Ns182 = await Pr_Size.create(newSize182);
        console.log('Ns182 created: ', Ns182.toJSON());
        const newSize183 = 
        {
            productID: 'WAP001',
            sizeID: 'XS02'
        };
        const Ns183 = await Pr_Size.create(newSize183);
        console.log('Ns183 created: ', Ns183.toJSON());
        const newSize184 = 
        {
            productID: 'WAP001',
            sizeID: 'S02'
        };
        const Ns184 = await Pr_Size.create(newSize184);
        console.log('Ns184 created: ', Ns184.toJSON());
        const newSize185 = 
        {
            productID: 'WAP001',
            sizeID: 'M02'
        };
        const Ns185 = await Pr_Size.create(newSize185);
        console.log('Ns185 created: ', Ns185.toJSON());
        const newSize186 = 
        {
            productID: 'WAP001',
            sizeID: 'L02'
        };
        const Ns186 = await Pr_Size.create(newSize186);
        console.log('Ns186 created: ', Ns186.toJSON());
        const newSize187 = 
        {
            productID: 'WAP002',
            sizeID: 'XS02'
        };
        const Ns187 = await Pr_Size.create(newSize187);
        console.log('Ns187 created: ', Ns187.toJSON());
        const newSize188 = 
        {
            productID: 'WAP002',
            sizeID: 'S02'
        };
        const Ns188 = await Pr_Size.create(newSize188);
        console.log('Ns188 created: ', Ns188.toJSON());
        const newSize189 = 
        {
            productID: 'WAP002',
            sizeID: 'M02'
        };
        const Ns189 = await Pr_Size.create(newSize189);
        console.log('Ns189 created: ', Ns189.toJSON());
        const newSize190 = 
        {
            productID: 'WAP002',
            sizeID: 'L02'
        };
        const Ns190 = await Pr_Size.create(newSize190);
        console.log('Ns190 created: ', Ns190.toJSON());
        const newSize191 = 
        {
            productID: 'WAP003',
            sizeID: 'XS02'
        };
        const Ns191 = await Pr_Size.create(newSize191);
        console.log('Ns191 created: ', Ns191.toJSON());
        const newSize192 = 
        {
            productID: 'WAP003',
            sizeID: 'S02'
        };
        const Ns192 = await Pr_Size.create(newSize192);
        console.log('Ns192 created: ', Ns192.toJSON());
        const newSize193 = 
        {
            productID: 'WAP003',
            sizeID: 'M02'
        };
        const Ns193 = await Pr_Size.create(newSize193);
        console.log('Ns193 created: ', Ns193.toJSON());
        const newSize194 = 
        {
            productID: 'WAP003',
            sizeID: 'L02'
        };
        const Ns194 = await Pr_Size.create(newSize194);
        console.log('Ns194 created: ', Ns194.toJSON());
        
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