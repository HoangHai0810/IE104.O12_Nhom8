'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category_Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Category_Product.hasMany(models.Product);
        }
    };
    Category_Product.init({
        categoryProductID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        gender: DataTypes.TEXT,
        material: DataTypes.TEXT,
        type: DataTypes.TEXT,
    }, {
        sequelize,
        modelName: 'Category_Product',
    });
    return Category_Product;
};