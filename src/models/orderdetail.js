'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderdetail extends Model {
    static associate(models) {
      Orderdetail.belongsTo(models.Order, { foreignKey: 'orderID' });
      Orderdetail.belongsTo(models.Product, { foreignKey: 'productID' });
    }
  };
  Orderdetail.init({
    orderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'Orderdetail',
  });
  return Orderdetail;
};
