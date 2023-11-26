import express from "express";
import homeController from "../controllers/homeController";
import { route } from "express/lib/router";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/account', homeController.getInfoUser)
    router.get('/register', homeController.getLoginSignUp);
    router.get('/login', homeController.getLoginSignUp);
    router.get('/product', homeController.getInfoProduct);
    router.get('/men', homeController.getListProduct);
    router.get('/menshirts', homeController.getListProduct);
    router.get('/menAoThun', homeController.getListProduct);
    router.get('/menAoSoMi', homeController.getListProduct);
    router.get('/menAoJean', homeController.getListProduct);
    router.get('/menAoKhoac', homeController.getListProduct);
    router.get('/mentrousers', homeController.getListProduct);
    router.get('/menQuanThun', homeController.getListProduct);
    router.get('/menQuanDui', homeController.getListProduct);
    router.get('/menQuanJean', homeController.getListProduct);
    router.get('/menQuanTay', homeController.getListProduct);
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
    router.get('/shoes', homeController.getListProduct);
    router.get('/jackets', homeController.getListProduct);
    router.get('/glasses', homeController.getListProduct);
    router.get('/Socks', homeController.getListProduct);
    router.get('/hats', homeController.getListProduct);
    router.get('/user', homeController.getInfoUser);
    router.get('/product', homeController.getInfoProduct);
    router.get('/cart', homeController.getCart);
    router.get('/upload', homeController.getUpload);
    router.post('/upavatar', homeController.uploadAvatar);
    router.post('/uploadPhoto', homeController.uploadPhoto)
    router.post('/signup', homeController.postSignUp);
    router.post('/login', homeController.loginCRUD);
    router.get('/logout',homeController.logout);
    router.post('/uploadProduct', homeController.pushProduct)
    return app.use("/", router);
}

module.exports = initWebRoutes;