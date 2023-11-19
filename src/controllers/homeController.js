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
        let allProducts = await CRUDSevice.getAllProducts({
            raw: true,
        });
        let menShirts = await CRUDSevice.getAllMenShirts({
            raw: true,
        });
        let menAoThun = await CRUDSevice.getAllMenAoThun({
            raw: true,
        });
        let menAoSoMi = await CRUDSevice.getAllMenAoSoMi({
            raw: true,
        });
        let menAoJean = await CRUDSevice.getAllMenAoJean({
            raw: true,
        });
        let menAo3Lo = await CRUDSevice.getAllMenAo3Lo({
            raw: true,
        });
        let allMen = await CRUDSevice.getAllMen({
            raw: true,
        });
        let menTrousers = await CRUDSevice.getAllMenTrousers({
                    raw: true,
        });
        let menQuanThun = await CRUDSevice.getAllMenQuanThun({
            raw: true,
        });
        let menQuanDui = await CRUDSevice.getAllMenQuanDui({
                    raw: true,
        });
        let menQuanJean = await CRUDSevice.getAllMenQuanJean({
                    raw: true,
        });
        let menQuanLot = await CRUDSevice.getAllMenQuanLot({
                    raw: true,
        });


        let allWomen = await CRUDSevice.getAllWomen({
            raw: true,
        });
        let womenShirts = await CRUDSevice.getAllWomenShirts({
            raw: true,
        });
        let womenAoThun = await CRUDSevice.getAllWomenAoThun({
            raw: true,
        });
        let womenAoSoMi = await CRUDSevice.getAllWomenAoSoMi({
            raw: true,
        });
        let womenAoJean = await CRUDSevice.getAllWomenAoJean({
            raw: true,
        });
        let womenAoKhoac = await CRUDSevice.getAllWomenAoKhoac({
            raw: true,
        });
        let womenTrousers = await CRUDSevice.getAllWomenTrousers({
                    raw: true,
        });
        let womenQuanThun = await CRUDSevice.getAllWomenQuanThun({
            raw: true,
        });
        let womenQuanDui = await CRUDSevice.getAllWomenQuanDui({
                    raw: true,
        });
        let womenQuanJean = await CRUDSevice.getAllWomenQuanJean({
                    raw: true,
        });
        let womenQuanTay = await CRUDSevice.getAllWomenQuanTay({
                    raw: true,
        });


        let allShoes = await CRUDSevice.getAllShoes({
                    raw: true,
        });
        let allDiscounted = await CRUDSevice.getAllDiscounted({
                    raw: true,
        });
        let allJackets = await CRUDSevice.getAllJackets({
                    raw: true,
        });
        let allGlasses = await CRUDSevice.getAllGlasses({
                    raw: true,
        });
        let allSocks = await CRUDSevice.getAllSocks({
                    raw: true,
        });
        let allHats = await CRUDSevice.getAllHats({
                    raw: true,
        });
        
        return res.render('list_product.ejs',
        {
            allProducts: JSON.stringify(allProducts),

            allMen: JSON.stringify(allMen),
            menShirts: JSON.stringify(menShirts),
            menAoThun: JSON.stringify(menAoThun),
            menAoSoMi: JSON.stringify(menAoSoMi),
            menAoJean: JSON.stringify(menAoJean),
            menAo3Lo: JSON.stringify(menAo3Lo),
            menTrousers: JSON.stringify(menTrousers),
            menQuanThun: JSON.stringify(menQuanThun),
            menQuanDui: JSON.stringify(menQuanDui),
            menQuanJean: JSON.stringify(menQuanJean),
            menQuanLot: JSON.stringify(menQuanLot),
            

            allShoes: JSON.stringify(allShoes),
            allDiscounted: JSON.stringify(allDiscounted),
            allJackets: JSON.stringify(allJackets),
            allGlasses: JSON.stringify(allGlasses),
            allSocks: JSON.stringify(allSocks),
            allHats: JSON.stringify(allHats),
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
        return res.render('info_user.ejs')
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

module.exports = {
    getHomePage: getHomePage,
    getLoginSignUp: getLoginSignUp,
    getListProduct: getListProduct,
    getInfoUser: getInfoUser,
    getCart: getCart,
    getInfoProduct: getInfoProduct
}