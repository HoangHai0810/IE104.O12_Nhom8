'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Color extends Model {
    static associate(models) {
      //  Product_Color.belongsTo(models.Color, {foreignKey: 'colorID'});
      //  Product_Color.belongsTo(models.Product, {foreignKey: 'productID'})
    }
  };
  Product_Color.init({
    productID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    colorID: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'Product_Color',
  });
  return Product_Color;
};
