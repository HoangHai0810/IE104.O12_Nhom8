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
    router.get('/menShirts', homeController.getListProduct);
    router.get('/menSweater', homeController.getListProduct);
    router.get('/menTankTop', homeController.getListProduct);
    router.get('/menTShirt', homeController.getListProduct);
    router.get('/menJacket', homeController.getListProduct);
    router.get('/menTrousers', homeController.getListProduct);
    router.get('/menKaki', homeController.getListProduct);
    router.get('/menShorts', homeController.getListProduct);
    router.get('/menJean', homeController.getListProduct);
    router.get('/menUnderwear', homeController.getListProduct);
    router.get('/women', homeController.getListProduct);
    router.get('/womenShirts', homeController.getListProduct);
    router.get('/womenShirt', homeController.getListProduct);
    router.get('/womenTShirt', homeController.getListProduct);
    router.get('/womenDress', homeController.getListProduct);
    router.get('/womenJacket', homeController.getListProduct);
    router.get('/womenTrousers', homeController.getListProduct);
    router.get('/womenPants', homeController.getListProduct);
    router.get('/womenShorts', homeController.getListProduct);
    router.get('/womenJeans', homeController.getListProduct);
    router.get('/womenAuthPants', homeController.getListProduct);
    router.get('/hotitem', homeController.getListProduct);
    router.get('/sale', homeController.getListProduct);
    router.get('/more', homeController.getListProduct);
    router.get('/shoes', homeController.getListProduct);
    router.get('/glasses', homeController.getListProduct);
    router.get('/socks', homeController.getListProduct);
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
    router.post('/updateuser', homeController.updateUser);
    router.get('/delete-crud', homeController.delCRUD);
    router.post('/uploadProduct', homeController.pushProduct);
    router.post('/postCart', homeController.addToCart);
    router.get('/admin', homeController.getAdmin)
    router.post('/removeProduct', homeController.removeProductFromCart);
    router.post('/deleteProduct', homeController.deleteProduct);
    return app.use("/", router);
}

module.exports = initWebRoutes;