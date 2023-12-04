import { render } from "ejs";
import express, { application } from 'express'
import db, { sequelize } from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";
import { json } from "body-parser";

const fs = require('fs');

let getHomePage = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    let allProducts = await CRUDSevice.getAllProducts({raw : true})
    try {
        return res.render('homepage.ejs', {
            login: login,
            allProducts: allProducts,
        })

    } catch (e) {
        console.log(e);
    }
}

let getLoginSignUp = async (req, res) => {
    try {
        let login = await CRUDSevice.getLogin({ raw: true });
        let dataUser = await CRUDSevice.getAllUser({
            raw: true,
        })
        let allProducts = await CRUDSevice.getAllProducts({raw : true})
        return res.render(
            'login_signup.ejs',
            {
                dataUserF: JSON.stringify(dataUser),
                dataUser: dataUser,
                login: login,
                allProducts: allProducts
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
                    login: login,
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
                })
        }
        else if (req.url == '/womenShirt') {
            let womenTShirt = await CRUDSevice.getAllWomenTShirt({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenTShirt),
                    login: login,
                    allProducts: allProducts
                })
        }
        else if (req.url == '/womenTShirt') {
            let womenShirt = await CRUDSevice.getAllWomenShirt({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (womenShirt),
                    login: login,
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
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
                    allProducts: allProducts
                })
        }
        else if (req.url == '/shoes') {
            let allShoes = await CRUDSevice.getAllShoes({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allShoes),
                    login: login,
                    allProducts: allProducts
                })
        }
        else if (req.url == '/socks') {
            let allSocks = await CRUDSevice.getAllSocks({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allSocks),
                    login: login,
                    allProducts: allProducts
                })
        }
        else if (req.url == '/handbag') {
            let allHandBag = await CRUDSevice.getAllHandBag({
                raw: true,
            });
            return res.render('list_product.ejs',
                {
                    dataProduct: (allHandBag),
                    login: login,
                    allProducts: allProducts
                })
        }   
        

    } catch (e) {
        console.log(e);
    }
}

let getInfoProduct = async (req, res) => {
    try {
        let productID = req.query.productID;
        let product = await CRUDSevice.getProductInfoByProductId(productID);
        let Product_Color = await db.Product_Color.findAll();
        let Product_Size = await db.Product_Size.findAll();
        let logins = await CRUDSevice.getLogin({ raw: true });
        let imageCount = 0;
        let allProducts = await CRUDSevice.getAllProducts({raw : true})
        const path = require('path');
        const imgDirectory = path.join(__dirname, '..', 'public', 'img');
        const files = fs.readdirSync(imgDirectory);
        files.forEach(file => {
            if (file.includes(productID)) {
                imageCount++;
            }
        });
        return res.render('info_product.ejs',{ product: product, imageCount: imageCount, Product_Color: Product_Color, Product_Size: Product_Size, loginsF: JSON.stringify(logins), logins: logins, allProducts: allProducts})
    } catch (e) {
        console.log(e);
    }
}

let getInfoUser = async (req, res) => {
    try {
        let login = await CRUDSevice.getLogin({ raw: true });
        let allProducts = await CRUDSevice.getAllProducts({raw : true})
        if (login.length > 0) {
            let data = await CRUDSevice.getUserInfoById(login[0].userID, {
                raw: true,
            });
            return res.render('info_user.ejs', {
                login: JSON.stringify(login),
                data: data,
                allProducts: allProducts
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
        let allProducts = await CRUDSevice.getAllProducts({raw : true})
        return res.render('upload_product.ejs', {
            productLength: product.length,
            login: login,
            allProducts: allProducts
        })
    } catch (e) {
        console.log(e);
    }
}

let getCart = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    let cart = await CRUDSevice.getCartDetails({ raw: true });
    let voucher = await CRUDSevice.getVouchers({ raw: true});
    let allProducts = await CRUDSevice.getAllProducts({raw : true})
    try {
        return res.render('cart.ejs', { login: login, cart: cart, voucher: voucher, allProducts })
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

const uploadPhoto = (req, res) => {
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

let pushProduct = async (req, res) => {
    let mes = await CRUDSevice.createNewProduct(req.body);
    res.redirect('/')
}

let loginCRUD = async (req, res) => {
    let mes = await CRUDSevice.createNewLogin(req.body);
    let login = await CRUDSevice.getLogin({ raw: true });
    if (login[0].role == 'Admin') {
        res.redirect('/admin');
    }
    else {
        res.redirect('/')
    }
}

let postSignUp = async (req, res) => {
    let message = await CRUDSevice.createUser(req.body);
    console.log(message);
    res.redirect('/')
}

let logout = async (req, res) => {
    await CRUDSevice.logoutCRUD();
    res.redirect('/')
}

let getAdmin = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    let dataUser = await CRUDSevice.getAllUser({
        raw: true,
    })
    try {
        if (login.length > 0) {
            if (login[0].role === 'Admin') {
                return res.render('admin.ejs', {
                    login: login,
                    dataUser: dataUser,
                    dataUserF: JSON.stringify(dataUser),
                    loginF: JSON.stringify(login),

                })  
            }
            else {
                res.redirect('/')
            }
        }
        else {
            res.redirect('/')
        }
    } catch (e) {
        console.log(e);
    }

}

let updateUser = async (req, res) => {
    let mes = await CRUDSevice.updateUserRole(req.body);
    res.redirect('/admin');
}

let delCRUD = async (req, res) => {
    let userID = req.query.userID;
    if (userID) {
        await CRUDSevice.deleteUserById(userID);
        res.redirect('/admin')
    } else {
        return res.send('User not found!');
    }
}

let addToCart = async (req, res) => {
    let mes = await CRUDSevice.updateCart(req.body);
    console.log(mes);
    res.redirect('/cart');
}

let removeProductFromCart = async(req, res) => {
    let mess = await CRUDSevice.removeFromCart(req.body);
    console.log(mess);
    res.redirect('/cart');
}

let deleteProduct = async(req, res) => {
    let mess = await CRUDSevice.deleteProduct(req.body);
    // console.log(mess);
    res.redirect('/' + req.body.Location);
}

let buyNow = async(req, res) => {
    if(req.body.userID == 'null'){
        let cus_prod = await CRUDSevice.createCustomer(req.body);
        let order = await CRUDSevice.createOrder(cus_prod.cus, req.body);
        let order_detail = await CRUDSevice.createOrderDetail(order, cus_prod.data);
        res.redirect('/')
    }else{
        let cus = await db.Customer.findOne({
            where: {
                userID: req.body.userID,
            }
        });
        await CRUDSevice.updateCustomer(req.body);
        let orderF = await db.Order.findOne({
            where: {
                customerID: cus.customerID,
            }
        });
        if(!orderF){
            orderF = await CRUDSevice.createOrder(cus, req.body);
        }
        await CRUDSevice.updateOrder(orderF, req.body);
        let carts = await CRUDSevice.getAllCarts();
        for (let i = 0; i < carts.length; i++){
            if (carts[i].cartID == req.body.userID){
                console.log(carts[i].productID, carts[i].soLuong);
                let temp = await db.Orderdetail.findAll({
                    where:{
                        orderID: orderF.orderID,
                        productID: carts[i].productID,
                    }
                })
                await CRUDSevice.createOrderDetail(orderF, carts[i]);

                // if(!temp){
                //     await CRUDSevice.createOrderDetail(orderF, carts[i]);
                // }
                // else{
                //     for (let j = 0; j < temp.length; j++){
                //         temp[i].quantity += carts[i].soLuong;
                //         temp[i].price +=
                //     }
                // }
            }
        }
        // console.log(carts[1].soLuong);
        res.redirect('/')
    }
}

let getInfoCheckout = async (req, res) => {
    let login = await CRUDSevice.getLogin({ raw: true });
    let allProducts = await CRUDSevice.getAllProducts({raw : true})
    try {
        // console.log(req.userID)
        return res.render('info_checkout.ejs', {
            login: login,
            loginF: JSON.stringify(login),
            allProducts: allProducts,
            orderData: req.body,
        })

    } catch (e) {
        console.log(e);
    }
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
    addToCart: addToCart,
    updateUser: updateUser,
    delCRUD: delCRUD,
    getAdmin: getAdmin,
    removeProductFromCart: removeProductFromCart,
    deleteProduct: deleteProduct,
    buyNow: buyNow,
    getInfoCheckout: getInfoCheckout,
}