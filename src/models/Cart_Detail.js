'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Cart_Detail.belongsTo(models.Cart, {foreignKey: 'cartID'});
       Cart_Detail.belongsTo(models.Product, {foreignKey: 'productID'})
    }
  };
  Cart_Detail.init({
    productID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    cartID: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    soLuong: DataTypes.TINYINT,
    thanhTien: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Detail',
  });
  return Cart_Detail;
};
