'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Orderdetail.belongsTo(models.Order, { foreignKey: 'orderID' });
      // Orderdetail.belongsTo(models.Product, { foreignKey: 'productID' });
    }
  };
  Orderdetail.init({
    orderID: {
      type: DataTypes.STRING(10),
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
