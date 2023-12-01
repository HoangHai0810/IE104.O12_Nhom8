'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Product.hasMany(models.Order_Detail);
            // Product.hasMany(models.Product_Color);
            // Product.hasMany(models.Product_Size);
            Voucher.hasMany(models.Order);
        }
    };
    Voucher.init({
        voucherID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        value: DataTypes.TINYINT,
        describe: DataTypes.TEXT,
        expirationDate: DataTypes.INTEGER,
        // categoryVoucherID: DataTypes.STRING(10)
    }, {
        sequelize,
        modelName: 'Voucher',
    });
    return Voucher;
};