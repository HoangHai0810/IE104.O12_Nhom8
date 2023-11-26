const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/Color');

const sequelize = new Sequelize(config.development);

const Color = UserModel(sequelize, Sequelize.DataTypes);

async function insertColor()
{
    try
    {
        await sequelize.sync();
        // Nam
        //Product 1: https://ssstutter.com/p/sss-mini-logo-tee
        const newColor1 = 
        {
            colorID: '#A52A2A' ,
            colorName: 'Brown'   
        };
        const Color1 = await Color.create(newColor1);
        console.log('Color1 created: ', Color1.toJSON());
        const newColor2 = 
        {
            colorID: '#F5F5DC',
            colorName: 'Beige'
        };
        const Color2 = await Color.create(newColor2);
        console.log('Color2 created: ', Color2.toJSON());
        const newColor3 = 
        {
            colorID: '#D3D3D3',
            colorName: 'Light Grey'
        };
        const Color3 = await Color.create(newColor3);
        console.log('Color3 created: ', Color3.toJSON());
        //Product 2: https://ssstutter.com/p/peak-tee
        const newColor4 = 
        {
            colorID: '#FFFFFF',
            colorName: 'White'
        };
        const Color4 = await Color.create(newColor4);
        console.log('Color4 created: ', Color4.toJSON());
        const newColor5 = 
        {
            colorID: '#000080',
            colorName: 'Navy Blue'
        };
        const Color5 = await Color.create(newColor5);
        console.log('Color5 created: ', Color5.toJSON());
        const newColor6 = 
        {
            colorID: '#F4A460',
            colorName: 'Sandy Brown'
        };
        const Color6 = await Color.create(newColor6);
        console.log('Color6 created: ', Color6.toJSON());
        const newColor7 = 
        {
            colorID: '#000000',
            colorName: 'Black'
        };
        const Color7 = await Color.create(newColor7);
        console.log('Color7 created: ', Color7.toJSON());
        const newColor8 = 
        {
            colorID: '#808080',
            colorName: 'Grey',
        };
        const Color8 = await Color.create(newColor8);
        console.log('Color8 created: ', Color8.toJSON());
        //Product 3: https://ssstutter.com/p/textured-plai-jacket-ver-ii
        const newColor9 = 
        {
            colorID: '#BC8F8F',
            colorName: 'Rosy Brown'
        };
        const Color9 = await Color.create(newColor9);
        console.log('Color9 created: ', Color9.toJSON());
        //Product 4: https://ssstutter.com/p/sss-daily-khaki-pants (Color2, Color7)
        //Product 5: https://ssstutter.com/p/form-jeans-ii (Color 5, Color 2, Color 7)
        const newColor10 = 
        {
            colorID: '#00008B',
            colorName: 'Dark Blue'
        };
        const Color10 = await Color.create(newColor10);
        console.log('Color10 created: ', Color10.toJSON());
        //Product 6: https://ssstutter.com/p/smart-baggy-jeans (Color7)
        const newColor11 = 
        {
            colorID: '#87CEFA',
            colorName: 'Light Sky Blue'
        };
        const Color11 = await Color.create(newColor11);
        console.log('Color11 created: ', Color11.toJSON());
        //Product 7: https://ssstutter.com/p/city-sweatshirt-2023 (Color5, Color2)
        const newColor12 = 
        {
            colorID: '#808000',
            colorName: 'Olive'
        };
        const Color12 = await Color.create(newColor12);
        console.log('Color12 created: ', Color12.toJSON());
        //Product 8: https://ssstutter.com/p/enoughism-tee
        const newColor13 = 
        {
            colorID: '#708090',
            colorName: 'Slate Grey'
        };
        const Color13 = await Color.create(newColor13);
        console.log('Color13 created: ', Color13.toJSON());
        //Product 9: https://routine.vn/ao-khoac-chan-bong-nam-co-cao-phoi-day-keo-form-regular-10f23jac005.html (Black, Brown)
        const newColor14 = 
        {
            colorID: '#0000FF',
            colorName: 'Blue'
        };
        const Color14 = await Color.create(newColor14);
        console.log('Color14 created: ', Color14.toJSON());
        const newColor15 = 
        {
            colorID: '#FFA500',
            colorName: 'Orange'
        };
        const Color15 = await Color.create(newColor15);
        console.log('Color15 created: ', Color15.toJSON());
        //Product 10: https://routine.vn/ao-khoac-bomber-nam-kaki-khoa-keo-gap-ly-form-regular-10f23jac009.html (Beige, Black)
        //Product 11: https://routine.vn/quan-jean-tui-hop-jogger-10s23dpa029.html (Beige, Brown)
        //Product 12: https://routine.vn/quan-kaki-nam-tui-suon-tron-form-cargo-10s23pca013.html (Beige)
        //Product 13: https://routine.vn/quan-kaki-nam-gap-ly-tron-form-slim-crop-10s23pca001.html (Black, White)
        const newColor16 = 
        {
            colorID: '#2E8B57',
            colorName: 'Sea Green'
        };
        const Color16 = await Color.create(newColor16);
        console.log('Color16 created: ', Color16.toJSON());
        //Product 14: https://ssstutter.com/p/american-polo-sweatshirt (Navy Blue)
        const newColor17 = 
        {
            colorID: '#FFFF00',
            colorName: 'Yellow'
        };
        const Color17 = await Color.create(newColor17);
        console.log('Color17 created: ', Color17.toJSON());
        //Product 15: https://ssstutter.com/p/tennis-sweatshirt---ver2 (Navy Blue)
        const newColor18 = 
        {
            colorID: '#228B22',
            colorName: 'Forest Green'
        };
        const Color18 = await Color.create(newColor18);
        console.log('Color18 created: ', Color18.toJSON());
        const newColor19 = 
        {
            colorID: '#FFFFF0',
            colorName: 'Ivory' ,
        };
        const Color19 = await Color.create(newColor19);
        console.log('Color19 created: ', Color19.toJSON());
        //Nữ:
        //Product 16: https://routine.vn/ao-khoac-chan-bong-nu-phoi-mau-form-regular-10f23jacw004.html (Black, Brown)
        //Product 17: https://routine.vn/ao-khoac-nhung-nu-croptop-phoi-vien-form-regular-crop-10f22jacw007.html (Black)
        //Product 18: https://routine.vn/ao-khoac-gio-nu-co-mu-tui-dap-tron-form-cargo-10s23wjaw001.html (Orange, Black)
        const newColor20 = 
        {
            colorID: '#9ACD32',
            colorName: 'Yellow Green' ,
        };
        const Color20 = await Color.create(newColor20);
        console.log('Color20 created: ', Color20.toJSON());
        //Product 19: https://routine.vn/dam-so-mi-nep-lech-10s21drew011.html (Black)
        //Product 20: https://routine.vn/dam-mini-co-thuyen-fit-10f21drew033.html
        const newColor21 = 
        {
            colorID: '#F0E68C',
            colorName: 'Khaki' ,
        };
        const Color21 = await Color.create(newColor21);
        console.log('Color21 created: ', Color21.toJSON());

        //Product 21: https://routine.vn/dam-midi-sat-nach-co-tron-ra-than-truoc-aline-10s23drew004.html
        const newColor22 = 
        {
            colorID: '#006400',
            colorName: 'Dark Green' ,
        };
        const Color22 = await Color.create(newColor22);
        console.log('Color22 created: ', Color22.toJSON());
        /*Nam Part 2:*/
        //Product 22: https://routine.vn/ao-gile-len-nam-det-kim-sat-nach-acrylic-co-v-form-regular-10f23kni007.html (Beige, Black, Grey)
        //Product 23: https://routine.vn/ao-tanktop-nam-co-tron-soc-gan-tron-form-regular-10s23kni006.html (White, Blue, Grey)
        //Product 24: https://routine.vn/ao-thun-tanktop-nam-sat-nach-ke-soc-gan-tron-form-slim-10s23tto001.html (Beige, Black, White)
        //Product 25: https://routine.vn/quan-short-nam-ong-rong-rut-day-tron-form-relax-10f23psh024.html (Beige, Black)
        //Product 26: https://routine.vn/quan-short-the-thao-in-chuyen-nhiet-form-regular-10s23psha001.html (Navy, Black, Grey)
        //Product 27: https://routine.vn/quan-short-nam-tui-hop-tron-form-relax-10f22psh014.html (Khaki, Navy)
        //Product 28: https://routine.vn/quan-boxer-und002-s21-10s21und002cr1.html (Navy, Grey, Blue)
        //Product 29: https://routine.vn/quan-lot-nam-seamless-co-gion-theu-form-fitted-10s22und001r1.html (Light Blue, Black, White, Brown)
        const newColor23 = 
        {
            colorID: '#ADD8E6',
            colorName: 'Light Blue' ,
        };
        const Color23 = await Color.create(newColor23);
        console.log('Color23 created: ', Color23.toJSON());
        //Product 30: https://yame.vn/shop/quan-lot-tam-giac/quan-lot-hip-brief-y2010-bamboo-m9-combo-3-0021547?c=Đen (Black)
        /*Nữ Part 2:*/
        //Product 31: https://routine.vn/ao-polo-nu-tay-bo-cotton-pique-tron-form-fitted-10s23polw002.html (White, Dark Blue)
        const newColor24 =
        {
            colorID: '#FFB6C1',
            colorName: 'Light Pink' ,
        };
        const Color24 = await Color.create(newColor24);
        console.log('Color24 created: ', Color24.toJSON());
        //Product 32: https://routine.vn/ao-thun-nu-tay-ngan-co-tron-ke-soc-ngang-form-fitted-10s23tssw012.html (Orange, Light Pink)
        const newColor25 =
        {
            colorID: '#8FBC8F',
            colorName: 'Dark Sea Green' ,
        };
        const Color25 = await Color.create(newColor25);
        console.log('Color25 created: ', Color25.toJSON());
        //Product 33: https://routine.vn/ao-thun-tay-ngan-in-regular-crop-10s22tssw002.html (Black, White)
        const newColor26 =
        {
            colorID: '#FFC0CB',
            colorName: 'Pink' ,
        };
        const Color26 = await Color.create(newColor26);
        console.log('Color26 created: ', Color26.toJSON());
        //Product 34: https://routine.vn/ao-so-mi-unisex-ke-soc-caro-form-loose-10f23shlu001.html (Black, Brown)
        //Product 35: https://routine.vn/ao-so-mi-nu-tay-dai-linen-tui-theu-form-regular-crop-10s23shlw010.html (Yellow Green)
        const newColor27 =
        {
            colorID: '#F8F8FF',
            colorName: 'Ghost White' ,
        };
        const Color27 = await Color.create(newColor27);
        console.log('Color27 created: ', Color27.toJSON());
        //Product 36: https://routine.vn/ao-so-mi-nu-tay-dai-tron-xe-sau-form-loose-10f22shlw010.html (Black, White, Yellow Green)
        //Product 37: https://routine.vn/quan-jean-lien-suon-lai-tua-loose-10f23dpaw021.html (Beige)
        //Product 38: https://routine.vn/quan-jean-nu-tron-phoi-lai-form-straight-10s23dpaw013.html (Dark Blue)
        //Product 39: https://routine.vn/quan-jean-nu-xe-lai-tron-form-flare-10f22dpaw022.html (Grey)
        //Product 40: https://yody.vn/quan-short-kaki-nu-tui-nap (Rosy Brown)
        //Product 41: https://routine.vn/quan-short-nu-ngan-relax-10f22pshw001.html (Black, Yellow Green, Light Pink)
        const newColor28 =
        {
            colorID: '#F5F5F5',
            colorName: 'White Smoke' ,
        };
        const Color28 = await Color.create(newColor28);
        console.log('Color28 created: ', Color28.toJSON());
        //Product 42: https://routine.vn/quan-short-nu-lung-cao-tron-form-panama-10s23pshw001.html (Yellow Green, White)
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
insertColor();