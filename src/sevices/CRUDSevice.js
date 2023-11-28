import { promiseImpl } from 'ejs';
import db, { sequelize } from '../models/index'
import bcrypt from 'bcryptjs';
import { query } from 'express';
// import { all } from 'sequelize/types/lib/operators';
const { QueryTypes } = require('sequelize');
const salt = bcrypt.genSaltSync(10);


let createNewUser = async(data) => {
    return new Promise(async (reslove,reject) => {
        try{
            await db.Users.create({
                userName: data.userName,
                userPassword: data.userPassword,
                role: 'Guest',
            })
            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}


let createNewProduct = async(data) => {
    return new Promise(async (reslove,reject) => {
        try{
            let product = await db.Product.findAll();
            console.log(product.length)
            var productID = data.categoryProductID + '0' + (product.length + 1).toString();

            await db.Product.create({
                productID: productID,
                productName: data.productName,
                description: data.description,
                material: data.material,
                categoryProductID: data.categoryProductID,
                price: data.price,
                rate: 0,
                discount: 0,
            })

            for (let i=0; i< data.sizeID.length; i++)
            {
                let size = ''
                if (productID[0] === 'M')
                    if (data.sizeID[i] != 'XS')
                        size = data.sizeID[i] + '01';
                else
                    if (data.sizeID[i] != 'XL')
                        size = data.sizeID[i] + '02';
                if (size != '')
                {
                    await db.Product_Size.create({
                        sizeID: size,
                        productID: productID
                    })
                }
            }
            for (let i=0 ; i<data.colorID.length; i++)
            {
                let Color = db.Color.findAll()
                let checkCl = true;
                for (let j=0;j<Color.length;j++)
                {
                    if (Color.colorID == data.colorID[i])
                        checkCl = false
                }
                if (checkCl)
                {
                    await db.Color.create({
                        colorID: data.colorID[i],
                    })
                }
                await db.Product_Color.create({
                    colorID: data.colorID[i],
                    productID: productID
                })
            }
            reslove('Added Product!')
        } catch (e) {
            reject(e);
        }
    })
}

let createNewLogin = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Login.create({
                userID: data.userID
            })
            reslove('Added login!')
        } catch (e) {
            reject(e);
        }
    })
}


let getAllUser = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = await sequelize.query("SELECT * FROM `customers` INNER JOIN `users` ON customers.userID = users.userID", { type: QueryTypes.SELECT });
            reslove(users);
            console.log(users)
        } catch (e) {
            reject(e);
        }
    })
}


let getLogin = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let login = await sequelize.query("SELECT * FROM (`logins` INNER JOIN `users` ON logins.userID = users.userID) INNER JOIN `customers` ON customers.userID = users.userID", { type: QueryTypes.SELECT });
            reslove(login);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userID) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.Users.findOne({
                where: {
                    userID: userID,
                }
            })
            if (user) {
                reslove(user)
            }
            else {
                reslove({})
            }
            reslove(user);
        } catch (e) {
            reject(e);
        };
    })
}

let editUser = async(data) => {
    return new Promise(async(reslove,reject) => {
        try{
            let user = await db.User.findOne({
                where: {
                    id: data.id,
                }
            })
            if (user)
            {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender === '1' ? true : false;

                await user.save();
                reslove('Edited user!');
            }
            else
            {
                reslove();
            }
        } catch(e) {
            reject(e);
        }
    })
}

let getProductInfoByProductId = (productID) => {
    return new Promise(async(reslove, reject) => {
        try {
            let product = await db.Product.findOne({
                where: {
                    productID: productID,
                }
            })
            if (product)
            {
                reslove(product)
            }
            else
            {
                reslove({})
            }
        } catch(e){
            reject(e);
        };
    })
}

let updateUserRole = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    userName: data.userName,
                }
            })
            if (user) {
                user.roleId = data.roleId;
                let allcode = await db.Allcode.findOne({
                    where: {
                        userId: user.id,
                    }
                })
                if (allcode) {
                    allcode.destroy();
                }
                await user.save();
                if (user.roleId === 'manager') {
                    await db.Allcode.create({
                        tenDoiBong: data.tenDoiBong,
                        userId: user.id
                    })
                }
                reslove('Edited user!');
            }
            else {
                reslove();
            }
        } catch (e) {
            reject(e);
        }
    })
}


let deleteUserById = (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: userId } })
            if (user) {
                if (user.roleId != 'manager')
                    user.destroy();
                else {
                    let allcode = await db.Allcode.findOne({
                        where: {
                            userId: user.id,
                        }
                    })
                    if (allcode) {
                        allcode.destroy();
                    }
                    user.destroy();
                }
            }
            reslove();
        } catch (e) {
            reject(e);
        }
    })
}

let logoutCRUD = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let login = await db.Login.findAll();
            if (login) {
                for (let k = 0; k < login.length; k++) {
                    login[k].destroy();
                }
            }
            reslove();
        } catch (e) {
            reject(e);
        }
    })
}


let getAllThamSo = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT * FROM thamSos", { type: QueryTypes.SELECT });
            reslove(ketqua);
        } catch (e) {
            reject(e)
        }
    });
}

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
let getAllProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allProducts = await sequelize.query(
                "select * from Products",
                { type: QueryTypes.SELECT }
            );
            resolve(allProducts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMen = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allMen = await sequelize.query(
                "select * from Products, Category_Products where Products.categoryProductID = Category_Products.categoryProductID and gender = 'Man'",
                { type: QueryTypes.SELECT }
            );
            resolve(allMen);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenShirts = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let menShirts = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type in ('T-shirt', 'Jacket', 'Tank Top', 'Sweater Shirt')",
                { type: QueryTypes.SELECT }
            );
            reslove(menShirts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenTShirts = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let menTShirts = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'T-shirt'",
                { type: QueryTypes.SELECT }
            );
            reslove(menTShirts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenJacket = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menJacket = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Jacket'",
                { type: QueryTypes.SELECT }
            );
            resolve(menJacket);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenSweaterShirt = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menSweatShirt = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Sweater Shirt'",
                { type: QueryTypes.SELECT }
            );
            resolve(menSweatShirt);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenTankTop = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let menTankTop = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type ='Tank Top'",
                { type: QueryTypes.SELECT }
            );
            resolve(menTankTop);
        } catch(e)
        {
            reject(e)
        }
    });
}

let getAllMenKaki = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menKaki = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Kaki'",
                { type: QueryTypes.SELECT }
            );
            resolve(menKaki);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenJeans = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menJeans = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Jeans'",
                { type: QueryTypes.SELECT }
            );
            resolve(menJeans);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenShortPants = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menShortPants = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Short Pants'",
                { type: QueryTypes.SELECT }
            );
            resolve(menShortPants);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenUnderwear = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menUnderwear = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type = 'Underwear'",
                { type: QueryTypes.SELECT }
            );
            resolve(menUnderwear);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenTrousers = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let menTrousers = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and type in ('Pants', 'Jeans', 'Short Pants', 'Underwear')",
                { type: QueryTypes.SELECT }
            );
            resolve(menTrousers);
        } catch(e)
        {
            reject(e)
        }
    });
}

let getAllWomen = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allWomen = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman'",
                { type: QueryTypes.SELECT }
            );
            resolve(allWomen);
        } catch (e) {
            reject(e)
        }
    });
}


let getAllWomenShirts = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let womenShirts = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type in ('Dress', 'Shirt', 'T-Shirt', 'Jacket')",
                { type: QueryTypes.SELECT }
            );
            reslove(womenShirts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenTrousers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenTrousers = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type in ('Pants', 'Shorts', 'Jeans', 'Auth Pants')",
                { type: QueryTypes.SELECT }
            );
            resolve(womenTrousers);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenDresses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenDresses = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'Dress'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenDresses);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenShirt = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenShirts = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'Shirt'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenShirts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenTShirt = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenTShirt = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'T-Shirt'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenTShirt);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenJackets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womanJackets = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type ='Jacket'",
                { type: QueryTypes.SELECT }
            );
            resolve(womanJackets);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenPants = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenPants = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'Pants'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenPants);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenJeans = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenJeans = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'Jeans'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenJeans);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenAuthPants = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenAuthPants = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type = 'Auth Pants'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenAuthPants);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenShorts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenShorts = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and type ='Shorts'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenShorts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllShoes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allShoes = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'shoes'",
                { type: QueryTypes.SELECT }
            )
            resolve(allShoes);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllDiscounted = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allDiscounted = await sequelize.query(
                "select * from Products where Products.discount <> 0",
                { type: QueryTypes.SELECT }
            )
            resolve(allDiscounted);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllGlasses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allGlasses = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'glasses'",
                { type: QueryTypes.SELECT }
            )
            resolve(allGlasses);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllSocks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allSocks = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'socks'",
                { type: QueryTypes.SELECT }
            )
            resolve(allSocks);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllHats = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allHats = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'hat'",
                { type: QueryTypes.SELECT }
            )
            resolve(allHats);
        } catch (e) {
            reject(e)
        }
    });
}

let createCustomer = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Customers.create({
                fullName: data.fullName,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                nativeVillage: data.nativeVillage,
                userId: 'Null',
            })

            reslove('Added customer!')
        } catch (e) {
            reject(e);
        }
    })
}

let createUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Users.create({
                userID: data.userName,
                userName: data.userName,
                userPassword: data.userPassword,
                role: 'Guest'
            })
            await db.Customers.create({
                fullName: data.fullName,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                nativeVillage: data.nativeVillage,
                userId: data.userName
            })
            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}

let createCart = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Carts.create({
                cartID: data.userID,
                soLuong: 0,
                thanhTien: 0,
                userID: data.userID
            })

            reslove('Added Cart!')
        } catch (e) {
            reject(e);
        }
    })
}

let createOrder = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let Od = await db.Orders.create({
                customerID: data.customerID,
                status: 'Đang chuẩn bị',
                note: '',
                address: data.address,
                totalCost: 0,
                voucherID: ''
            })

            // Od.totalCost = Od.totalCost + 

            reslove('Added Cart!')
        } catch (e) {
            reject(e);
        }
    })
}

let updateCart = async (user, product) => {
    return new Promise(async (reslove, reject) => {
        try {
            let cart = await db.Carts.findOne({
                where: {
                    cartID: user.userID,
                }
            })
            let product = await db.Products.findOne({
                where: {
                    productID: product.productID,
                }
            })
            await db.Cart_Details.create({
                cartID: user.userID,
                productID: product.productID,
                soLuong: 0,
                thanhTien: 0
            })
            let cd = await db.Cart_Details.findOne({
                where: {
                    cartID: user.userID,
                    productID: product.productID
                }
            })
            if (cart && product) {
                cd.soLuong = cd.soLuong + 1;
                cd.thanhTien = cd.thanhTien + product.price;
                await cd.save();
                cart.soLuong = cart.soLuong + 1;
                cart.thanhTien = cart.thanhTien + cd.thanhTien;
            }
            await cart.save();
            reslove('Updated cart!');

        } catch (e) {
            reject(e);
        }
    });
}

let editCustomer = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.Customers.findOne({
                where: {
                    userID: data.userID,
                }
            })
            if (user) {
                Customers.fullName = data.fullName;
                Customers.dateOfBirth = data.dateOfBirth;
                Customers.phoneNumber = data.phoneNumber;
                Customers.nativeVillage = data.nativeVillage;

                await Customers.save();
                reslove('Edited user!');
            }
            else {
                reslove();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (uID) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.Users.findOne({ where: { userID: uID } })
            if (user) {
                if (user.role != 'manager')
                    user.destroy();
                else {
                    let allcode = await db.Allcode.findOne({
                        where: {
                            userId: user.userID,
                        }
                    })
                    if (allcode) {
                        allcode.destroy();
                    }
                    user.destroy();
                }
            }
            reslove();
        } catch (e) {
            reject(e);
        }
    })
}

let getCartDetails = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allCartDetails = await sequelize.query(
                "select * from (Carts inner join Cart_Details on Carts.cartID = Cart_Details.cartID) innner join Products on Products.productID = Cart_Details.productID ",
                { type: QueryTypes.SELECT }
            )
            resolve(allCartDetails);
        } catch (e) {
            reject(e)
        }
    });
}

module.exports = {
    getAllProducts: getAllProducts,
    getAllMen: getAllMen,
    getAllMenShirts: getAllMenShirts,
    getAllMenTShirts: getAllMenTShirts,
    getAllMenJacket: getAllMenJacket,
    getAllMenSweaterShirt: getAllMenSweaterShirt,
    getAllMenTankTop: getAllMenTankTop,
    
    getAllMenTrousers: getAllMenTrousers,
    getAllMenKaki: getAllMenKaki,
    getAllMenJeans: getAllMenJeans,
    getAllMenShortPants: getAllMenShortPants,
    getAllMenUnderwear: getAllMenUnderwear,

    getAllWomen: getAllWomen,
    getAllWomenShirts: getAllWomenShirts,
    getAllWomenDresses: getAllWomenDresses,
    getAllWomenShirt: getAllWomenShirt,
    getAllWomenTShirt: getAllWomenTShirt,
    getAllWomenJackets: getAllWomenJackets,
    getAllWomenTrousers: getAllWomenTrousers,
    getAllWomenPants: getAllWomenPants,
    getAllWomenShorts: getAllWomenShorts,
    getAllWomenJeans: getAllWomenJeans,
    getAllWomenAuthPants: getAllWomenAuthPants, 

    // getAllShoes: getAllShoes,
    getAllDiscounted: getAllDiscounted,
    getAllGlasses: getAllGlasses,
    getAllSocks: getAllSocks,
    getAllHats: getAllHats,

    createNewUser : createNewUser,
    getAllUser: getAllUser,

    getProductInfoByProductId: getProductInfoByProductId,
    createCustomer: createCustomer,
    createUser: createUser,
    createCart: createCart,
    createOrder: createOrder,
    createNewProduct: createNewProduct,

    editUser: editUser,
    editCustomer: editCustomer,
    updateCart: updateCart,

    deleteUser: deleteUser,

    getLogin: getLogin,

    getUserInfoById: getUserInfoById,

    getCartDetails: getCartDetails,
    // editUser: editUser,
    // deleteUserById: deleteUserById,
    // createTeam: createTeam,
    // createKetQua: createKetQua,
    // createDienBien: createDienBien,
    // getAllTongKet: getAllTongKet,
    // getAllCauThu: getAllCauThu,
    // getALLDoiBong: getALLDoiBong,
    // getAllLichChuaThiDau: getAllLichChuaThiDau,
    // getAllLichDaThiDau: getAllLichDaThiDau,
    // getAllKetQua: getAllKetQua,
    // getAllLichThiDau: getAllLichThiDau,
    // getAllTranDau: getAllTranDau,
    // getAllThamSo: getAllThamSo,
    createNewLogin: createNewLogin,
    // getAllCode: getAllCode,
    logoutCRUD: logoutCRUD,
    // getCauThuByMaCauThu: getCauThuByMaCauThu,
    // editCauThu: editCauThu,
    // deleteCauThuById: deleteCauThuById,
    // createCauThu: createCauThu,
    // updateUserRole: updateUserRole,
    // getAllAllCode: getAllAllCode,
    // updateLichThiDau: updateLichThiDau,
    // createLichThiDau: createLichThiDau
}