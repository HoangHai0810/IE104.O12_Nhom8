import { render } from "ejs";
import express, { application } from 'express'
import db, { sequelize } from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";
import { json } from "body-parser";

const fs = require('fs');

let getHomePage = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    console.log(login)
    try {
        return res.render('homepage.ejs',{
            login: login
        })
    } catch (e) {
        console.log(e);
    }
}

let getLoginSignUp = async (req, res) => {
    try {
        let dataUser = await CRUDSevice.getAllUser({
            raw: true,
        })
        return res.render(
            'login_signup.ejs',
            {
                dataUserF: JSON.stringify(dataUser),
                dataUser: dataUser,
            }
        )
    } catch (e) {
        console.log(e);
    }
}

let getListProduct = async (req, res) => {
    try {
        let allProducts = await CRUDSevice.getAllProducts({
            raw: true,
        });
        
        if (req.url == '/men') {
            let allMen = await CRUDSevice.getAllMen({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allMen),
                })
        }
        else if (req.url == '/menshirts') {
            let menShirts = await CRUDSevice.getAllMenShirts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menShirts),
                })
        }
        else if (req.url == '/menAoThun') {
            let menAoThun = await CRUDSevice.getAllMenAoThun({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menAoThun),
                })
        }
        else if (req.url == '/menSoMi') {
            let menSoMi = await CRUDSevice.getAllMenSoMi({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menSoMi),
                })
        }
        else if (req.url == '/menAoJean') {
            let menAoJean = await CRUDSevice.getAllMenAoJean({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menAoJean),
                })
        }
        else if (req.url == '/menAoKhoac') {
            let menAoKhoac = await CRUDSevice.getAllMenAoKhoac({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menAoKhoac),
                })
        }
        else if (req.url == '/mentrousers') {
            let menTrousers = await CRUDSevice.getAllMenTrousers({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menTrousers),
                })
        }
        else if (req.url == '/menQuanDui') {
            let menQuanDui = await CRUDSevice.getAllMenQuanDui({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menQuanDui),
                })
        }
        else if (req.url == '/menQuanThun') {
            let menQuanThun = await CRUDSevice.getAllMenQuanThun({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menQuanThun),
                })
        }
        else if (req.url == '/menQuanJean') {
            let menQuanJean = await CRUDSevice.getAllMenQuanJean({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menQuanJean),
                })
        }
        else if (req.url == '/menQuanTay') {
            let menQuanTay = await CRUDSevice.getAllMenQuanTay({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menQuanTay),
                })
        }
        else if (req.url == '/women') {
            let allwomen = await CRUDSevice.getAllWomen({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allwomen),
                })
        }
        else if (req.url == '/womenshirts') {
            let womenShirts = await CRUDSevice.getAllWomenShirts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenShirts),
                })
        }
        else if (req.url == '/womenAoThun') {
            let womenAoThun = await CRUDSevice.getAllWomenAoThun({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenAoThun),
                })
        }
        else if (req.url == '/womenSoMi') {
            let womenSoMi = await CRUDSevice.getAllWomenSoMi({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenSoMi),
                })
        }
        else if (req.url == '/womenAoJean') {
            let womenAoJean = await CRUDSevice.getAllWomenAoJean({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenAoJean),
                })
        }
        else if (req.url == '/womenAoKhoac') {
            let womenAoKhoac = await CRUDSevice.getAllWomenAoKhoac({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenAoKhoac),
                })
        }
        else if (req.url == '/womentrousers') {
            let womenTrousers = await CRUDSevice.getAllWomenTrousers({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenTrousers),
                })
        }
        else if (req.url == '/womenQuanDui') {
            let womenQuanDui = await CRUDSevice.getAllWomenQuanDui({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenQuanDui),
                })
        }
        else if (req.url == '/womenQuanThun') {
            let womenQuanThun = await CRUDSevice.getAllWomenQuanThun({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenQuanThun),
                })
        }
        else if (req.url == '/womenQuanJean') {
            let womenQuanJean = await CRUDSevice.getAllWomenQuanJean({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenQuanJean),
                })
        }
        else if (req.url == '/womenQuanTay') {
            let womenQuanTay = await CRUDSevice.getAllWomenQuanTay({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenQuanTay),
                })
        }
        else if (req.url == '/womenQuanTay') {
            let womenQuanTay = await CRUDSevice.getAllWomenQuanTay({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenQuanTay),
                })
        }
        else if (req.url == '/hotitem') {
            let hotItem = await CRUDSevice.getAllWomenQuanTay({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (hotItem),
                })
        }
        
    } catch (e) {
        console.log(e);
    }
}

let getInfoProduct = async (req, res) => {
    try {
        let productID = req.query.productID;
        let product = await CRUDSevice.getProductInfoByProductId(productID)
        let Product_Color = await db.Product_Color.findAll()
        let imageCount = 0;
        const path = require('path');
        const imgDirectory = path.join(__dirname, '..', 'public', 'img');
        const files = fs.readdirSync(imgDirectory);
        files.forEach(file => {
            if (file.includes(productID)) {
                imageCount++;
            }
        });
        return res.render('info_product.ejs',{ product: product, imageCount: imageCount, Product_Color: Product_Color})
    } catch (e) {
        console.log(e);
    }
}

let getInfoUser = async (req, res) => {
    try {
        let login = await CRUDSevice.getLogin({ raw: true });
        if (login.length > 0) {
            let data = await CRUDSevice.getUserInfoById(login[0].userID, {
                raw: true,
            });
            return res.render('info_user.ejs', {
                login: JSON.stringify(login),
                data: data
            })
        }
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

let getUpload = async (req, res) => {
    try {
        let product = await CRUDSevice.getAllProducts();
        return res.render('upload_product.ejs' ,{
            productLength: product.length
        })
    } catch (e) {
        console.log(e);
    }
}

let getCart = async (req, res) => {
    try {
        return res.render('cart.ejs')
    } catch (e) {
        console.log(e);
    }
}

const multer = require('multer');
const path = require('path');

const storageAVT = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),
    filename: function (req, file, cb) {
        const userID = req.query.userID;
        console.log(userID)
        const filename = userID + '.png';

        cb(null, filename);
    }
});

const uploadAVT = multer({ storage: storageAVT });

const uploadAvatar = (req, res) => {
    uploadAVT.single('file')(req, res, (err) => {
        if (err) {
            console.error('Lỗi khi tải lên ảnh:', err);
            return res.status(500).send('Internal Server Error');
        }
        else {
            console.error('Lưu trữ ảnh thành công');
        }
    });
};

const storagePT = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),
    filename: function (req, file, cb) {
        const productID = req.query.productID;
        const filename = productID + '.png';

        cb(null, filename);
    }
});

const uploadPT = multer({ storage: storagePT });

const uploadPhoto = (req,res) => {
    uploadPT.single('file')(req, res, (err) => {
        if (err) {
            console.error('Lỗi khi tải lên ảnh:', err);
            return res.status(500).send('Internal Server Error');
        }
        else {
            console.error('Lưu trữ ảnh thành công');
        }
    });
}

let pushProduct = async(req, res) => {
    let mes = await CRUDSevice.createNewProduct(req.body);
    res.redirect('/')
}

let loginCRUD = async(req, res) => {
    let mes = await CRUDSevice.createNewLogin(req.body);
    console.log(mes);
    let login = await CRUDSevice.getLogin({ raw: true});
    if (login[0].role == 'admin')
    {   
        res.redirect('/admin');
    }
    else
    {
        res.redirect('/')
    }
}

let postSignUp = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    res.redirect('/')
}

let logout = async (req,res) => {
    await CRUDSevice.logoutCRUD();
    res.redirect('/')
}

module.exports = {
    getHomePage: getHomePage,
    getLoginSignUp: getLoginSignUp,
    getListProduct: getListProduct,
    getInfoUser: getInfoUser,
    getCart: getCart,
    getInfoProduct: getInfoProduct,
    uploadAvatar: uploadAvatar,
    uploadPhoto, uploadPhoto,
    postSignUp: postSignUp,
    loginCRUD: loginCRUD,
    getUpload: getUpload,
    logout: logout,
    pushProduct: pushProduct,
}