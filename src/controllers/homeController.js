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
        let login = await CRUDSevice.getLogin({ raw: true });
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
                    login :login,
                })
        }
        else if (req.url == '/menShirts') {
            let menShirts = await CRUDSevice.getAllMenShirts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menShirts),
                    login: login,
                })
        }
        else if (req.url == '/menTShirt') {
            let menTShirt = await CRUDSevice.getAllMenTShirts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menTShirt),
                    login: login,
                })
        }
        else if (req.url == '/menSweater') {
            let menSweater = await CRUDSevice.getAllMenSweaterShirt({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menSweater),
                    login: login,
                })
        }
        else if (req.url == '/menTankTop') {
            let menTankTop = await CRUDSevice.getAllMenTankTop({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menTankTop),
                    login: login,
                })
        }
        else if (req.url == '/menJacket') {
            let menJacket = await CRUDSevice.getAllMenJacket({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menJacket),
                    login: login,
                })
        }
        else if (req.url == '/menTrousers') {
            let menTrousers = await CRUDSevice.getAllMenTrousers({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menTrousers),
                    login: login,
                })
        }
        else if (req.url == '/menShorts') {
            let menShorts = await CRUDSevice.getAllMenShortPants({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menShorts),
                    login: login,
                })
        }
        else if (req.url == '/menKaki') {
            let menKaki = await CRUDSevice.getAllMenKaki({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menKaki),
                    login: login,
                })
        }
        else if (req.url == '/menJean') {
            let menJean = await CRUDSevice.getAllMenJeans({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menJean),
                    login: login,
                })
        }
        else if (req.url == '/menUnderwear') {
            let menUnderwear = await CRUDSevice.getAllMenUnderwear({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (menUnderwear),
                    login: login,
                })
        }
        else if (req.url == '/women') {
            let allwomen = await CRUDSevice.getAllWomen({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allwomen),
                    login: login,
                })
        }
        else if (req.url == '/womenShirts') {
            let womenShirts = await CRUDSevice.getAllWomenShirts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenShirts),
                    login: login,
                })
        }
        else if (req.url == '/womenTShirt') {
            let womenTShirt = await CRUDSevice.getAllWomenTShirt({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenTShirt),
                    login: login,
                })
        }
        else if (req.url == '/womenShirt') {
            let womenShirt = await CRUDSevice.getAllWomenShirt({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenShirt),
                    login: login,
                })
        }
        else if (req.url == '/womenDress') {
            let womenDress = await CRUDSevice.getAllWomenDresses({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenDress),
                    login: login,
                })
        }
        else if (req.url == '/womenJacket') {
            let womenJacket = await CRUDSevice.getAllWomenJackets({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenJacket),
                    login: login,
                })
        }
        else if (req.url == '/womenTrousers') {
            let womenTrousers = await CRUDSevice.getAllWomenTrousers({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenTrousers),
                    login: login,
                })
        }
        else if (req.url == '/womenPants') {
            let womenPants = await CRUDSevice.getAllWomenPants({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenPants),
                    login: login,
                })
        }
        else if (req.url == '/womenShorts') {
            let womenShorts = await CRUDSevice.getAllWomenShorts({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenShorts),
                    login: login,
                })
        }
        else if (req.url == '/womenJeans') {
            let womenJeans = await CRUDSevice.getAllWomenJeans({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenJeans),
                    login: login,
                })
        }
        else if (req.url == '/womenAuthPants') {
            let womenAuthPants = await CRUDSevice.getAllWomenAuthPants({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenAuthPants),
                    login: login,
                })
        }
        //////////////////////
        else if (req.url == '/sale') {
            let discounted = await CRUDSevice.getAllDiscounted({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (discounted),
                    login: login,
                })
        }
        else if (req.url == '/hotitem') {
            let hotItem = await CRUDSevice.getAllWomenQuanTay({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (hotItem),
                    login: login,
                })
        }
        
    } catch (e) {
        console.log(e);
    }
}

let getInfoProduct = async (req, res) => {
    try {
        let login = await CRUDSevice.getLogin({ raw: true });
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
        return res.render('info_product.ejs',{ product: product, imageCount: imageCount, Product_Color: Product_Color, login: login})
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
        let login = await CRUDSevice.getLogin({ raw: true });
        let product = await CRUDSevice.getAllProducts();
        return res.render('upload_product.ejs' ,{
            productLength: product.length,
            login: login
        })
    } catch (e) {
        console.log(e);
    }
}

let getCart = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    try {
        return res.render('cart.ejs', { login: login})
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