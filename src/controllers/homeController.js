import { render } from "ejs";
import express, { application } from 'express'
import db from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";
import { json } from "body-parser";


let getHomePage = async (req, res) => {
    try {
        return res.render('homepage.ejs')
    } catch(e) {
        console.log(e);
    }
}

let getLoginSignUp = async (req, res) => {
    try {
        return res.render('login_signup.ejs')
    } catch(e) {
        console.log(e);
    }
}

let getListProduct = async (req, res) => {
    try {
        return res.render('list_product.ejs')
    } catch(e) {
        console.log(e);
    }
}

let getInfoProduct = async (req, res) => {
    try {
        return res.render('info_product.ejs')
    } catch(e) {
        console.log(e);
    }
}

let getInfoUser = async (req, res) => {
    try {
        let login = await CRUDSevice.getLogin({ raw: true});
        if (login.length > 0)
        {
            let data = await CRUDSevice.getUser(login[0].userId, {
                raw :   true,
            });
            return res.render('info_user.ejs', {
                login: login,
                data: data
            })
        }
        res.redirect('/');
    } catch(e) {
        console.log(e);
    }
}

let getCart = async (req, res) => {
    try {
        return res.render('cart.ejs')
    } catch(e) {
        console.log(e);
    }
}

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img'),
  filename: function (req, file, cb) {
    const userId = req.user.id;
    const filename = `${userId}`;

    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

const uploadAvatar = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      console.error('Lỗi khi tải lên ảnh:', err);
      return res.status(500).send('Internal Server Error');
    }
    else {
        console.error('Lưu trữ ảnh thành công');
    }
  });
};

module.exports = {
    getHomePage: getHomePage,
    getLoginSignUp: getLoginSignUp,
    getListProduct: getListProduct,
    getInfoUser: getInfoUser,
    getCart: getCart,
    getInfoProduct: getInfoProduct,
    uploadAvatar: uploadAvatar,
}