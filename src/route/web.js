import express from "express";
import homeController from "../controllers/homeController";
import { route } from "express/lib/router";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/register', homeController.getLoginSignUp);
    router.get('/men', homeController.getListProduct);
    router.get('/women', homeController.getListProduct);
    router.get('/hotitem', homeController.getListProduct);
    router.get('/sale', homeController.getListProduct);
    router.get('/more', homeController.getProduct);
    router.get('/user', homeController.getInfoUser);
    router.get('/cart', homeController.getCart);
    return app.use("/", router);
}

module.exports = initWebRoutes;