'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category_Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Category_Voucher.hasMany(models.voucher);
        }
    };
    Category_Voucher.init({
        categoryVoucherID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        categoryVoucherName: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Category_Voucher',
    });
    return Category_Voucher;
};