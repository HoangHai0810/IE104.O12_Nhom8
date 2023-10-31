import express from "express";
import homeController from "../controllers/homeController";
import { route } from "express/lib/router";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/register', homeController.getLoginSignUp);
    router.get('/menshirts', homeController.getListProduct);
    return app.use("/", router);
}

module.exports = initWebRoutes;