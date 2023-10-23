'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Order_Detail);
            Product.hasMany(models.Product_Color);
            Product.hasMany(models.Product_Size);
            Product.hasMany(models.Feedback);
            Product.belongsTo(models.Category_Product, {foreignKey: 'categoryProductID'});
        }
    };
    Product.init({
        productID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        } ,
        description: DataTypes.TEXT,
        price: DataTypes.BIGINT,
        rate: DataTypes.FLOAT,
        discount: DataTypes.TINYINT,
        categoryProductID: DataTypes.STRING(10)
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};