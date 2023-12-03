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
      Cart_Detail.belongsTo(models.Cart, { foreignKey: 'cartID' });
      Cart_Detail.belongsTo(models.Product, { foreignKey: 'productID' })
      Cart_Detail.belongsTo(models.Color, { foreignKey: 'colorID' })
      Cart_Detail.belongsTo(models.Size, { foreignKey: 'sizeID' })
    }
  };
  Cart_Detail.init({
    productID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    cartID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    soLuong: DataTypes.TINYINT,
    thanhTien: DataTypes.BIGINT,
    // colorID: DataTypes.STRING(10),
    // sizeID: DataTypes.STRING(5)
  }, {
    sequelize,
    modelName: 'Cart_Detail',
  });
  return Cart_Detail;
};
