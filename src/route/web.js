import express from "express";
import homeController from "../controllers/homeController";
import { route } from "express/lib/router";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/register', homeController.getLoginSignUp);
    router.get('/men', homeController.getListProduct);
    router.get('/menshirts', homeController.getListProduct);
    router.get('/menAoThun', homeController.getListProduct);
    router.get('/menAoSoMi', homeController.getListProduct);
    router.get('/menAoJean', homeController.getListProduct);
    router.get('/menAo3Lo', homeController.getListProduct);
    router.get('/mentrousers', homeController.getListProduct);
    router.get('/menQuanThun', homeController.getListProduct);
    router.get('/menQuanDui', homeController.getListProduct);
    router.get('/menQuanJean', homeController.getListProduct);
    router.get('/menQuanLot', homeController.getListProduct);
    router.get('/women', homeController.getListProduct);
    router.get('/womenshirts', homeController.getListProduct);
    router.get('/womenAoThun', homeController.getListProduct);
    router.get('/womenAoSoMi', homeController.getListProduct);
    router.get('/womenAoJean', homeController.getListProduct);
    router.get('/womenAoKhoac', homeController.getListProduct);
    router.get('/womentrousers', homeController.getListProduct);
    router.get('/womenQuanThun', homeController.getListProduct);
    router.get('/womenQuanDui', homeController.getListProduct);
    router.get('/womenQuanJean', homeController.getListProduct);
    router.get('/womenQuanTay', homeController.getListProduct);
    router.get('/hotitem', homeController.getListProduct);
    router.get('/sale', homeController.getListProduct);
    router.get('/more', homeController.getListProduct);
    router.get('/giay', homeController.getListProduct);
    router.get('/tat', homeController.getListProduct);
    router.get('/non', homeController.getListProduct);
    router.get('/user', homeController.getInfoUser);
    router.get('/cart', homeController.getCart);
    return app.use("/", router);
}

module.exports = initWebRoutes;