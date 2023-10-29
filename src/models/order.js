'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasMany(models.orderdetail)
      order.belongsTo(models.voucher, { foreignKey: 'voucherID' });
      order.belongsTo(models.customer, { foreignKey: 'customerID'});
      order.belongsToMany(models.product, { through: 'orderdetail'})
    }
  };
  order.init({
    orderID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    status: DataTypes.TEXT,
    note: DataTypes.TEXT,
    address: DataTypes.TEXT,
    totalCost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
