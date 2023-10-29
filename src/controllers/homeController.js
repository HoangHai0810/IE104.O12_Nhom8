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

module.exports = {
    getHomePage: getHomePage,
    getLoginSignUp: getLoginSignUp,
}