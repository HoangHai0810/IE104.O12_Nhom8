import { promiseImpl, resolveInclude } from 'ejs';
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
            var productID = data.categoryProductID + '0' + (product.length + 1).toString();
            console.log(data);
            await db.Product.create({
                productID: productID,
                productName: data.productName,
                description: data.description,
                material: data.material,
                categoryProductID: data.categoryProductID,
                price: data.price,
                discount: data.discount,
                rate: 0,
            })
            if (typeof(data.sizeID) == 'string')
            {
                let size = ''
                if (productID[0] === 'M')
                    if (data.sizeID != 'XS')
                        size = data.sizeID + '01';
                else
                    if (data.sizeID != 'XL')
                        size = data.sizeID + '02';
                if (size != '')
                {
                    await db.Product_Size.create({
                        sizeID: size,
                        productID: productID
                    })
                }
            }
            else
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
            if (typeof(data.colorID) == 'string')
                {
                    let Color = await db.Color.findAll()
                let checkCl = true;
                for (let j=0;j<Color.length;j++)
                {
                    if (Color[j].colorID == data.colorID)
                        checkCl = false
                }
                if (checkCl)
                {
                    await db.Color.create({
                        colorID: data.colorID,
                    })
                }
                await db.Product_Color.create({
                    colorID: data.colorID,
                    productID: productID
                })
                }
            else
            for (let i=0 ; i<data.colorID.length; i++)
            {
                let Color = await db.Color.findAll()
                let checkCl = true;
                for (let j=0;j<Color.length;j++)
                {
                    if (Color[j].colorID == data.colorID[i])
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
            let user = await db.Users.findOne({
                where: {
                    userName: data.userName,
                }
            })
            if (user) {
                user.role = data.role;
                await user.save();
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


let deleteUserById = (userID) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.Users.findOne({ where: { userID: userID } })
            if (user) {
                    let logins = await db.Login.findOne({where: {userID: userID}})
                    let feedbacks = await db.Feedback.findAll({where: {userID: userID}})
                    let Customer = await db.Customer.findOne({
                        where:{
                            userID: user.userID
                        }
                    })
                    let Order = await db.Order.findAll({
                        where: {
                            customerID: Customer.customerID,
                        }
                    })
                    for (let i=0;i< Order.length;i++)
                    {
                        let Orderdetail = await db.Orderdetail.findAll({
                            where: {
                            orderID: Order[i].orderID
                            }
                        })
                        for (let j=0; j<Orderdetail.length;j++)
                            Orderdetail[j].destroy()
                        Order[i].destroy()
                    }
                    // logins.destroy()
                    for (let i=0; i < feedbacks.length; i++){
                        feedbacks[i].destroy()
                    }
                    Customer.destroy()
                    user.destroy()
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'Shoes'",
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'Socks'",
                { type: QueryTypes.SELECT }
            )
            resolve(allSocks);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllHandBag = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allHanBag = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where type = 'Hand Bag'",
                { type: QueryTypes.SELECT }
            )
            resolve(allHanBag);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllCarts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await sequelize.query(
                "select * from Carts, Cart_Details, Products where Carts.cartID = Cart_Details.cartID and Cart_Details.productID = Products.productID",
                { type: QueryTypes.SELECT }
            );
            resolve(cart)
        } catch (e) {
            reject(e)
        }
    });
}

let createCustomer = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let cus = await db.Customer.create({
                fullName: data.name,
                dateOfBirth: data.dateOfBirth,
                phoneNumber: data.phoneNumber,
                nativeVillage: data.ward + ', ' + data.district + ', ' + data.city,
                userId: 'Null',
            })

            reslove({cus, data});
        } catch (e) {
            reject(e);
        }
    })
}

let createUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Users.create({
                userName: data.userName,
                userPassword: data.userPassword,
                role: 'Guest'
            })
            let user = await db.Users.findOne({ where : {userName: data.userName}})
            await db.Customer.create({
                // fullName: data.fullName,
                // dateOfBirth: data.dateOfBirth,
                // phoneNumber: data.phoneNumber,
                // nativeVillage: data.nativeVillage,
                userID: user.userID
            })
            createCart(user.userID)
            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}

let createCart = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Cart.create({
                cartID: data,
                soLuong: 0,
                thanhTien: 0,
                userID: data
            })

            reslove('Added Cart!')
        } catch (e) {
            reject(e);
        }
    })
}

let createOrder = async (data, addr) => {
    return new Promise(async (reslove, reject) => {
        try {
            let Order = await db.Order.create({
                customerID: data.customerID,
                status: 'Đang chuẩn bị',
                note: '',
                address: addr.address,
                totalCost: 0,
                // voucherID: 
            })
            reslove(Order)
        } catch (e) {
            reject(e);
        }
    })
}

let updateCart = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let Cart_Detail = await db.Cart_Detail.findOne({
                where: {
                    productID: data.productID,
                    cartID : data.userID,
                }
            })
            if(!Cart_Detail)
            {
                await db.Cart_Detail.create({
                    cartID: data.userID,
                    productID: data.productID,
                    soLuong: parseInt(data.quantity),
                    thanhTien: parseFloat(data.priceProduct)*parseFloat(data.quantity),
                })
            }
            else{
                Cart_Detail.soLuong += parseFloat(data.quantity);
                Cart_Detail.thanhTien = parseFloat(data.priceProduct) * Cart_Detail.soLuong;
                await Cart_Detail.save();
            }
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
                "select * from (Carts inner join Cart_Details on Carts.cartID = Cart_Details.cartID) inner join Products on Products.productID = Cart_Details.productID ",
                { type: QueryTypes.SELECT }
            )
            resolve(allCartDetails);
        } catch (e) {
            reject(e)
        }
    });
}

let getVouchers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allVouchers = await sequelize.query(
                "select * from vouchers",
                { type: QueryTypes.SELECT }
            )
            resolve(allVouchers);
        } catch (e) {
            reject(e)
        }
    });
}
  
let deleteProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            function remove(rows){
                for(let i = 0; i < rows.length; i++){
                    rows[i].destroy();
                }
            };
            let Order_Detail = await db.Orderdetail.findAll(
                { where: {
                    productID: data.productID, 
                } }
            );
            let Product_Color = await db.Product_Color.findAll(
                { where: {
                    productID: data.productID, 
                } }
            );
            let Product_Size = await db.Product_Size.findAll(
                { where: {
                    productID: data.productID, 
                } }
            );
            let Feedback = await db.Feedback.findAll(
                { where: {
                    productID: data.productID, 
                } }
            );
            let Cart_Detail = await db.Cart_Detail.findAll(
                { where: {
                    productID: data.productID, 
                } }
            );
            let Product = await db.Product.findOne(
                { where: {
                    productID: data.productID, 
                } }
            );
            if(Order_Detail){
                for(let i = 0; i < Order_Detail.length; i++){
                    await Order_Detail[i].destroy();
                }
            }
            if(Feedback){
                for(let i = 0; i < Feedback.length; i++){
                    await Feedback[i].destroy();
                }
            }
            if(Cart_Detail){
                for(let i = 0; i < Cart_Detail.length; i++){
                    await Cart_Detail[i].destroy();
                }
            }
            for(let i = 0; i < Product_Color.length; i++){
                await Product_Color[i].destroy();
            }
            for(let i = 0; i < Product_Size.length; i++){
                await Product_Size[i].destroy();
            }
            await Product.destroy();
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}

let removeFromCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Cart_Detail = await db.Cart_Detail.findOne(
                { where: {
                    cartID: data.cartID,
                    productID: data.productID, 
                } }
            )
            Cart_Detail.destroy();
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}

let createOrderDetail = (order, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ord_det = await db.Orderdetail.create({
                productID: data.productID,
                orderID: order.orderID,
                // quantity: data.quantity,
                // size: data.sizeID,
                // color: data.colorID,
            })
            updateOrder(ord_det, data);
            resolve(ord_det);
        } catch (e) {
            reject(e)
        }
    })
}

let updateOrder = (orderF, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order = await db.Order.findOne({
                where: {
                    orderID: orderF.orderID,
                }
            })
            if(!data.cartID){
                order.totalCost += (parseFloat(data.quantity) * parseFloat(data.priceProduct));
            }else{
                order.totalCost += (parseFloat(data.soLuong) * (parseFloat(data.price)*(1-parseFloat(data.discount)/100)));
            }
            order.address = data.address;
            order.phoneNumber = data.phoneNumber;
            await order.save();
            resolve(order)
        } catch (e) {
            reject(e)
        }
    })
}

let updateCustomer = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cus = await db.Customer.findOne({
                where: {
                    userID: data.userID,
                }
            })
            cus.fullName = data.name,
            cus.phoneNumber = data.phoneNumber,
            cus.nativeVillage = data.ward + ', ' + data.district + ', ' + data.city,
            await cus.save();
            resolve(cus)
        } catch (e) {
            reject(e)
        }
    })
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

    getAllShoes: getAllShoes,
    getAllDiscounted: getAllDiscounted,
    getAllGlasses: getAllGlasses,
    getAllSocks: getAllSocks,
    getAllHandBag: getAllHandBag,

    createNewUser : createNewUser,
    getAllUser: getAllUser,
    getVouchers: getVouchers,

    getProductInfoByProductId: getProductInfoByProductId,
    createCustomer: createCustomer,
    createUser: createUser,
    createCart: createCart,
    getAllCarts: getAllCarts,
    createOrder: createOrder,
    createNewProduct: createNewProduct,

    editUser: editUser,
    editCustomer: editCustomer,
    updateCart: updateCart,

    deleteUser: deleteUser,

    getLogin: getLogin,

    getUserInfoById: getUserInfoById,

    getCartDetails: getCartDetails,
    updateUserRole: updateUserRole,
    removeFromCart: removeFromCart,
    deleteProduct: deleteProduct,
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
    deleteUserById: deleteUserById,
    logoutCRUD: logoutCRUD,
    createOrderDetail: createOrderDetail,
    updateOrder: updateOrder,
    updateCustomer: updateCustomer,
}

