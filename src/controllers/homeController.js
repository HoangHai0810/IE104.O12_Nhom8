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
        let dataUser = await CRUDSevice.getAllUser({
            raw: true,
        })
        return res.render(
            'login_signup.ejs',
            {
                dataUserF: dataUser,
                dataUser: JSON.stringify(dataUser),
            }
        )
    } catch(e) {
        console.log(e);
    }
}

let getListProduct = async (req, res) => {
    try {
        let allProducts = await CRUDSevice.getAllProducts({
            raw: true,
        });
        let menShirts = await CRUDSevice.getAllMenShirts({
            raw: true,
        });
        let menAoThun = await CRUDSevice.getAllMenAoThun({
            raw: true,
        });
        // let menAoSoMi = await CRUDSevice.getAllMenAoSoMi({
        //     raw: true,
        // });
        let menAoKhoac = await CRUDSevice.getAllMenAoKhoac({
            raw: true,
        });
        // let menAo3Lo = await CRUDSevice.getAllMenAo3Lo({
        //     raw: true,
        // });
        let allMen = await CRUDSevice.getAllMen({
            raw: true,
        });
        let menTrousers = await CRUDSevice.getAllMenTrousers({
                    raw: true,
        });
        // let menQuanThun = await CRUDSevice.getAllMenQuanThun({
        //     raw: true,
        // });
        let menQuanDui = await CRUDSevice.getAllMenQuanDui({
                    raw: true,
        });
        let menQuanJean = await CRUDSevice.getAllMenQuanJean({
                    raw: true,
        });
        let menSweetShirt = await CRUDSevice.getAllMenSweetShirt({
                    raw: true,
        });


        let allWomen = await CRUDSevice.getAllWomen({
            raw: true,
        });
        let womenShirts = await CRUDSevice.getAllWomenShirts({
            raw: true,
        });
        let womenAoKhoac = await CRUDSevice.getAllWomenAoKhoac({
            raw: true,
        });
        let womenDress = await CRUDSevice.getAllWomenDress({
                    raw: true,
        });

        let allDiscounted = await CRUDSevice.getAllDiscounted({
                    raw: true,
        });
        let allJackets = await CRUDSevice.getAllJackets({
                    raw: true,
        });

        return res.render('list_product.ejs',
        {
            allProducts: JSON.stringify(allProducts),

            allMen: JSON.stringify(allMen),
            menShirts: JSON.stringify(menShirts),
            menAoThun: JSON.stringify(menAoThun),
            // menAoSoMi: JSON.stringify(menAoSoMi),
            menAoKhoac: JSON.stringify(menAoKhoac),
            // menAo3Lo: JSON.stringify(menAo3Lo),
            menTrousers: JSON.stringify(menTrousers),
            // menQuanThun: JSON.stringify(menQuanThun),
            menQuanDui: JSON.stringify(menQuanDui),
            menQuanJean: JSON.stringify(menQuanJean),
            menSweetShirt: JSON.stringify(menSweetShirt),
            
            allWomen: JSON.stringify(allWomen),
            womenShirts: JSON.stringify(womenShirts),
            womenAoKhoac: JSON.stringify(womenAoKhoac),
            womenDress: JSON.stringify(womenDress),

            allDiscounted: JSON.stringify(allDiscounted),
            allJackets: JSON.stringify(allJackets),
        })
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
let postSignUp = async(req,res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
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
    postSignUp: postSignUp,
}