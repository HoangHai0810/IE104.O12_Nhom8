'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderdetail.belongsTo(models.order, { foreignKey: 'orderID' });
      orderdetail.belongsTo(models.product, { foreignKey: 'productID' });
    }
  };
  orderdetail.init({
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
    modelName: 'orderdetail',
  });
  return orderdetail;
};
