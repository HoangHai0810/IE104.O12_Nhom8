import { promiseImpl } from 'ejs';
import db, { sequelize } from '../models/index'
import bcrypt from 'bcryptjs';
import { query } from 'express';
const { QueryTypes } = require('sequelize');
const salt = bcrypt.genSaltSync(10);


let createNewUser = async(data) => {
    return new Promise(async (reslove,reject) => {
        try{
            await db.Users.create({
                userName: data.userName,
                userPassword: data.password,
                // role: data.role,
            })
            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}

let createNewLogin = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.Login.create({
                userId: data.userId
            })
            reslove('Added login!')
        } catch (e) {
            reject(e);
        }
    })
}

let createLichThiDau = async (data, i) => {
    return new Promise(async (reslove, reject) => {
        try {
            var tempVong;
            if (data.vong[i] === 'Lượt đi') {
                tempVong = 1;
            }
            else {
                tempVong = 2;
            }
            data.ngay[i] = new Date();
            data.ngay[i].setHours(data.ngay[i].getHours() + 7);
            await db.lichThiDau.create({
                tenDoiBong1: data.teamName1[i],
                tenDoiBong2: data.teamName2[i],
                ngayGio: data.ngay[i],
                vong: tempVong,
            });


            reslove('Lich added!');
        } catch (e) {
            reject(e);
        }
    });
}

let updateLichThiDau = async (data, i) => {
    return new Promise(async (reslove, reject) => {
        try {
            let tran = await db.lichThiDau.findOne({
                where: {
                    tenDoiBong1: data.teamName1[i],
                    tenDoiBong2: data.teamName2[i]
                }
            })
            if (tran) {
                data.ngay[i] = new Date();
                data.ngay[i].setHours(data.ngay[i].getHours() + 7);
                tran.ngayGio = data.ngay[i];
                await tran.save();
            }
            else {
                reslove();
            }
            reslove('Lich updated!');
        } catch (e) {
            reject(e);
        }
    });
}

let createDienBien = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {

            for (let i = 0; i < data.dienBien.length; i++) {
                var maLoaiBT = 'LBT01';
                if (data.dienBien[i][2] == 'Trực tiếp') {
                    maLoaiBT = 'LBT02';
                }
                if (data.dienBien[i][2] == 'Đá phạt') {
                    maLoaiBT = 'LBT03';
                }
                if (data.dienBien[i][2] == 'Phản lưới nhà') {
                    maLoaiBT = 'LBT04';
                }
                var maLoaiThe = 'LT01';
                if (data.dienBien[i][3] == 'Thẻ vàng') {
                    maLoaiThe = 'LT02';
                }
                if (data.dienBien[i][3] == 'Thẻ đỏ') {
                    maLoaiThe = 'LT03';
                }
                await db.dienBien.create({
                    tenCauThu: data.dienBien[i][1],
                    tenDoiBong: data.dienBien[i][0],
                    maLoaiBanThang: maLoaiBT,
                    maLoaiThe: maLoaiThe,
                    thoiDiem: data.dienBien[i][4],
                    maLich: data.maLich,
                })
            }
            reslove('AddDienBien!!');
        } catch (e) {
            reject(e)
        }
    })
}

let createTeam = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.doiBong.create({
                tenDoiBong: data.teamName,
                sanNha: data.homeGround,
                mauAoSanNha: data.homeJerseyColor,
                mauAoSanKhach: data.awayJerseyColor,
            });
            data.playerData = JSON.parse(data.playerData);
            console.log(data.playerData);
            for (let i = 0; i < data.playerData.length; i++) {
                var tempLoaiCT = null;
                if (data.playerData[i][7] === 'Cầu thủ nước ngoài') {
                    tempLoaiCT = 'NN';
                }
                if (data.playerData[i][7] === 'Cầu thủ trong nước') {
                    tempLoaiCT = 'TN';
                }

                await db.cauThu.create({
                    tenCauThu: data.playerData[i][0],
                    soAo: data.playerData[i][1],
                    viTri: data.playerData[i][2],
                    ngaySinh: data.playerData[i][3],
                    chieuCao: data.playerData[i][4],
                    canNang: data.playerData[i][5],
                    tenDoiBong: data.teamName,
                    quocTich: data.playerData[i][6],
                    maLoaiCauThu: tempLoaiCT
                })
            }
            await db.tongKet.create({
                soBanThangSanKhach: 0,
                soTranDau: 0,
                soTranThang: 0,
                soTranHoa: 0,
                soTheVang: 0,
                soBanThang: 0,
                soBanThua: 0,
                soTheDo: 0,
                hieuSo: 0,
                diemSo: 0,
                soTranThua: 0,
                tenDoiBong: data.teamName,
            });
            reslove('Added Team!')
        } catch (e) {
            reject(e);
        }
    })
}

let createKetQua = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketquaDoi1 = 0;
            let ketquaDoi2 = 0;
            let soTheVang = 0;
            let soTheDo = 0;
            let thamSo = getAllThamSo({ raw: true });
            let DiemThang = 3;
            let DiemHoa = 1;
            let DiemThua = 0;
            for (let i = 0; i < thamSo.length; i++) {
                if (thamSo[i].tenThamSo == 'DiemThang') {
                    DiemThang = parseInt(thamSo[i].giaTri);
                }
                if (thamSo[i].tenThamSo == 'DiemHoa') {
                    DiemHoa = parseInt(thamSo[i].giaTri);
                }
                if (thamSo[i].tenThamSo == 'DiemThua') {
                    DiemThua = parseInt(thamSo[i].giaTri);
                }
            }
            for (let i = 0; i < data.dienBien.length; i++) {
                console.log(data.dienBien[i])
                console.log(data.doiNha)
                console.log(data.maLich)
                if (data.dienBien[i][3] == 'Thẻ vàng') { soTheVang = soTheVang + 1; };
                if (data.dienBien[i][3] == 'Thẻ đỏ') { soTheDo = soTheDo + 1; };
                if (data.dienBien[i][2] == 'Phản lưới nhà' && data.dienBien[i][0] == data.doiNha) { ketquaDoi2 = ketquaDoi2 + 1 };
                if (data.dienBien[i][2] == 'Phản lưới nhà' && data.dienBien[i][0] != data.doiNha) { ketquaDoi1 = ketquaDoi1 + 1 };
                if (data.dienBien[i][0] == data.doiNha) {
                    if (data.dienBien[i][2] == 'Trực tiếp' || data.dienBien[i][2] == 'Đá phạt') {
                        ketquaDoi1 = ketquaDoi1 + 1;
                    }
                }
                if (data.dienBien[i][0] != data.doiNha) {
                    if (data.dienBien[i][2] == 'Trực tiếp' || data.dienBien[i][2] == 'Đá phạt') {
                        ketquaDoi2 = ketquaDoi2 + 1;
                    }
                }
            };
            await db.ketQua.create({
                maLich: data.maLich,
                soBanThangDoi1: ketquaDoi1,
                soBanThangDoi2: ketquaDoi2,
                soTheDo: soTheDo,
                soTheVang: soTheVang,
            })
            let tongKet1 = await db.tongKet.findOne({
                where: {
                    tenDoiBong: data.doiNha,
                }
            })
            if (tongKet1) {
                tongKet1.soTranDau += 1;
                if (ketquaDoi1 > ketquaDoi2) {
                    tongKet1.diemSo += DiemThang;
                    tongKet1.soTranThang += 1;
                } else if (ketquaDoi1 == ketquaDoi2) {
                    tongKet1.diemSo += DiemHoa
                    tongKet1.soTranHoa += 1;
                } else {
                    tongKet1.diemSo += DiemThua;
                    tongKet1.soTranThua += 1;
                }
                tongKet1.soBanThang = tongKet1.soBanThang + ketquaDoi1;
                tongKet1.soBanThua += ketquaDoi2;
                tongKet1.hieuSo = tongKet1.hieuSo + ketquaDoi1 - ketquaDoi2;
                tongKet1.soTheVang = soTheVang;
                tongKet1.soTheDo = soTheDo;

                await tongKet1.save();
            }
            else {
                reslove();
            }


            let tongKet2 = await db.tongKet.findOne({
                where: {
                    tenDoiBong: data.doiKhach,
                }
            })
            if (tongKet2) {
                tongKet2.soTranDau += 1;
                if (ketquaDoi1 < ketquaDoi2) {
                    tongKet2.diemSo += DiemThang;
                    tongKet2.soTranThang += 1;
                } else if (ketquaDoi1 == ketquaDoi2) {
                    tongKet2.diemSo += DiemHoa
                    tongKet2.soTranHoa += 1;
                } else {
                    tongKet2.diemSo += DiemThua;
                    tongKet2.soTranThua += 1;
                }
                tongKet2.soBanThang = tongKet2.soBanThang + ketquaDoi2;
                tongKet2.soBanThua += ketquaDoi1;
                tongKet2.hieuSo = tongKet2.hieuSo + ketquaDoi2 - ketquaDoi1;
                tongKet2.soTheVang = soTheVang;
                tongKet2.soTheDo = soTheDo;

                await tongKet2.save()
            }
            else {
                reslove();
            }
            reslove('Add kq!');
        } catch (e) {
            reject(e)
        }
    })
}

let createCauThu = (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let viTri = 1;
            if (data.viTri == '1')
                viTri = 'Tiền đạo';
            if (data.viTri == '2')
                viTri = 'Tiền vệ';
            if (data.viTri == '3')
                viTri = 'Hậu vệ';
            if (data.viTri == '4')
                viTri = 'Thủ môn';
            let maLoaiCT = '';
            if (data.quocTich === 'Việt Nam')
                maLoaiCT = 'TN';
            else
                maLoaiCT = 'NN';
            await db.cauThu.create({
                tenCauThu: data.tenCauThu,
                quocTich: data.quocTich,
                viTri: viTri,
                chieuCao: data.chieuCao,
                canNang: data.canNang,
                soAo: data.soAo,
                ngaySinh: data.ngaySinh,
                tenDoiBong: data.tenDoiBong,
                maLoaiCauThu: maLoaiCT
            })

            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise((reslove, reject) => {
        try {
            var hashPassword = bcrypt.hashSync(password, salt);
            reslove(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllUser = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = db.Users.findAll();
            reslove(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCode = (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let allcode = await db.Allcode.findOne({
                where: {
                    userId: userId,
                }
            })
            if (allcode) {
                reslove(allcode);
            }
            else {
                reslove();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getLogin = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let login = await sequelize.query("SELECT userId ,users.roleId FROM `logins` INNER JOIN `users` ON logins.userId = users.Id", { type: QueryTypes.SELECT });
            reslove(login);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllTongKet = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let tongket = await sequelize.query("SELECT tongKets.tenDoiBong,soTranDau,soTranThang,soTranHoa,soTranThua,soBanThang,soBanThua,soTheVang,soTheDo,hieuSo,diemSo FROM `tongKets` INNER JOIN `doiBongs` ON tongKets.tenDoiBong = doiBongs.tenDoiBong ORDER BY diemSo DESC, hieuSo DESC, soBanThang DESC", { type: QueryTypes.SELECT });
            reslove(tongket);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCauThu = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let cauThu = await sequelize.query("SELECT * FROM `cauThus` ORDER BY tenDoiBong,viTri DESC", { type: QueryTypes.SELECT });
            reslove(cauThu);
        } catch (e) {
            reject(e)
        }
    });
}

let getALLDoiBong = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let doibong = await sequelize.query("SELECT * FROM `doiBongs` ORDER BY createdAt", { type: QueryTypes.SELECT });
            reslove(doibong);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichDaThiDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDau = await sequelize.query("SELECT distinct DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay FROM `lichThiDaus` WHERE (maLich  not in  (SELECT maLich from ketQuas )) and (DATE(ngayGio) <= NOW()) ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDau);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichChuaThiDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDauSau = await sequelize.query("SELECT lichThiDaus.maLich, tenDoiBong1,tenDoiBong2, soBanThangDoi1, soBanThangDoi2, DATE(ngayGio) AS ngayF, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay,DATE_FORMAT(ngayGio, '%H:%i') AS gio, vong, lichThiDaus.ngayGio FROM `lichThiDaus` INNER JOIN `ketQuas` ON lichThiDaus.maLich = ketQuas.maLich ORDER BY lichThiDaus.ngayGio DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDauSau);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichThiDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT maLich, tenDoiBong1,tenDoiBong2,DATE(ngayGio) AS ngayF, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay,DATE_FORMAT(ngayGio, '%H:%i') AS gio, vong, doiBongs.sanNha, lichThiDaus.ngayGio AS ngayGio, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%Y-%m-%dT%H:%i') as ngayGioThiDau FROM `lichThiDaus` INNER JOIN `doiBongs` ON lichThiDaus.tenDoiBong1 = doiBongs.tenDoiBong WHERE maLich NOT IN (SELECT maLich FROM `ketQuas`) ORDER BY lichThiDaus.ngayGio DESC", { type: QueryTypes.SELECT });
            console.log(ketqua);
            reslove(ketqua);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllTranDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDauTruoc = await sequelize.query("SELECT tenDoiBong1,tenDoiBong2, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay,DATE_FORMAT(ngayGio, '%H:%i') AS gio, vong, doiBongs.sanNha FROM `lichThiDaus` INNER JOIN `doiBongs` ON lichThiDaus.tenDoiBong1 = doiBongs.tenDoiBong ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDauTruoc);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllKetQua = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT ketQuas.maLich,soBanThangDoi1,soBanThangDoi2,soTheVang,soTheDo,tenDoiBong1,tenDoiBong2,DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay, DATE_FORMAT(ngayGio, '%H:%i') AS gio,vong FROM `ketQuas` INNER JOIN `lichThiDaus` ON ketQuas.maLich = lichThiDaus.maLich ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(ketqua);
        } catch (e) {
            reject(e)
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId,
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
            let product = await db.Products.findOne({
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man'",
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'male' and type like 'Ao%'",
                { type: QueryTypes.SELECT }
            );
            reslove(menShirts);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenTrousers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menTrousers = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and categoryProductName in ('Pant', 'Jeans')",
                { type: QueryTypes.SELECT }
            );
            resolve(menTrousers);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenAoThun = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menAoThun = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and categoryProductName ='T-shirt'",
                { type: QueryTypes.SELECT }
            );
            resolve(menAoThun);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenAoKhoac = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let menAoKhoac = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and categoryProductName ='Jacket'",
                { type: QueryTypes.SELECT }
            );
            resolve(menAoKhoac);
        } catch(e)
        {
            reject(e)
        }
    });
}

let getAllMenAoJean = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menAoJean = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'male' and type = 'Ao Jean'",
                { type: QueryTypes.SELECT }
            );
            resolve(menAoJean);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenQuanThun = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menQuanThun = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'male' and type = 'Quan Thun'",
                { type: QueryTypes.SELECT }
            );
            resolve(menQuanThun);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenQuanDui = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menQuanDui = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and categoryProductName ='Pant'",
                { type: QueryTypes.SELECT }
            );
            resolve(menQuanDui);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenQuanJean = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let menQuanJean = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Man' and categoryProductName ='Jeans'",
                { type: QueryTypes.SELECT }
            );
            resolve(menQuanJean);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllMenQuanTay = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let menQuanTay = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'male' and type = 'Quan Tay'",
                { type: QueryTypes.SELECT }
            );
            resolve(menQuanTay);
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type like 'Ao%'",
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
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Quan%'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenTrousers);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenAoThun = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenAoThun = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Ao Thun'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenAoThun);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenAoSoMi = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenAoSoMi = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Ao So Mi'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenAoSoMi);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenAoJean = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenAoJean = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Ao Jean'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenAoJean);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenAoKhoac = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womanAoKhoac = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and categoryProductName ='Jacket'",
                { type: QueryTypes.SELECT }
            );
            resolve(womanAoKhoac);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenQuanThun = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenQuanThun = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Quan Thun'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenQuanThun);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenQuanDui = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenQuanDui = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Quan Dui'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenQuanDui);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenQuanJean = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenQuanJean = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'female' and type = 'Quan Jean'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenQuanJean);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllWomenQuanTay = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let womenQuanTay = await sequelize.query(
                "select * from Products inner join Category_Products on Products.categoryProductID = Category_Products.categoryProductID where gender = 'Woman' and categoryProductName ='Dress'",
                { type: QueryTypes.SELECT }
            );
            resolve(womenQuanTay);
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

let editUser = async (data) => {
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


module.exports = {
    getAllProducts: getAllProducts,
    getAllMen: getAllMen,
    getAllMenShirts: getAllMenShirts,
    getAllMenAoThun: getAllMenAoThun,
    //getAllMenAoSoMi: getAllMenAoSoMi,
    getAllMenAoJean: getAllMenAoJean,
    getAllMenAoKhoac: getAllMenAoKhoac,
    
    getAllMenTrousers: getAllMenTrousers,
    // getAllMenQuanThun: getAllMenQuanThun,
    getAllMenQuanDui: getAllMenQuanDui,
    getAllMenQuanJean: getAllMenQuanJean,
    getAllMenQuanTay: getAllMenQuanTay,
    getAllWomen: getAllWomen,
    getAllWomenShirts: getAllWomenShirts,
    // getAllWomenAoThun: getAllWomenAoThun,
    // getAllWomenAoSoMi: getAllWomenAoSoMi,
    // getAllWomenAoJean: getAllWomenAoJean,
    getAllWomenAoKhoac: getAllWomenAoKhoac,
    // getAllWomenTrousers: getAllWomenTrousers,
    // getAllWomenQuanThun: getAllWomenQuanThun,
    // getAllWomenQuanDui: getAllWomenQuanDui,
    // getAllWomenQuanJean: getAllWomenQuanJean,
    //getAllWomenDress: getAllWomenDress, 

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

    editUser: editUser,
    updateCart: updateCart,

    deleteUser: deleteUser,

    // getUserInfoById: getUserInfoById,
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
    // createNewLogin: createNewLogin,
    // getLogin: getLogin,
    // getAllCode: getAllCode,
    // logoutCRUD: logoutCRUD,
    // getCauThuByMaCauThu: getCauThuByMaCauThu,
    // editCauThu: editCauThu,
    // deleteCauThuById: deleteCauThuById,
    // createCauThu: createCauThu,
    // updateUserRole: updateUserRole,
    // getAllAllCode: getAllAllCode,
    // updateLichThiDau: updateLichThiDau,
    // createLichThiDau: createLichThiDau
}