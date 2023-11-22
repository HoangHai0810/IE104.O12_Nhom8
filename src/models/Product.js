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
            // Product.hasMany(models.Order_Detail);
            // Product.hasMany(models.Product_Color);
            // Product.hasMany(models.Product_Size);
            Product.belongsToMany(models.Order, {through: 'Orderdetail', foreignKey: 'orderID'});
            Product.belongsToMany(models.Color, {through: 'Product_Color', foreignKey: 'colorID'});
            Product.belongsToMany(models.Size, {through: 'Product_Size', foreignKey: 'sizeID'});
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
        productName: {
            type: DataTypes.TEXT,
            allowNull: false,
        } ,
        description: DataTypes.TEXT,
        material: DataTypes.TEXT,
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