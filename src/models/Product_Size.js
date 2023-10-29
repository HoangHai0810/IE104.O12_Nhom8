'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Size.belongsTo(models.Product, {foreignKey: 'productID'});
      Product_Size.belongsTo(models.Size, {foreignKey: 'sizeID'})
    }
  };
  Product_Size.init({
    productID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    sizeID: {
      type: DataTypes.STRING(5),
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'Product_Size',
  });
  return Product_Size;
};
