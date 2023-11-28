'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsToMany(models.Product, {through: 'Cart_Detail', foreignKey: 'cartID'})
      Cart.belongsTo(models.Users, {foreignKey: 'userID'})
    }
  };
  Cart.init({
    cartID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(20)
    },
    soLuong: DataTypes.TINYINT,
    thanhTien: DataTypes.BIGINT,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};