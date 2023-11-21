'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Order.hasMany(models.Orderdetail)
      Order.belongsTo(models.Voucher, { foreignKey: 'voucherID' });
      Order.belongsTo(models.Customer, { foreignKey: 'customerID'});
      Order.belongsToMany(models.Product, { through: 'Orderdetail', foreignKey: 'orderID'})
    }
  };
  Order.init({
    orderID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    // customerID: DataTypes.STRING(10),
    // voucherID: DataTypes.STRING(10),
    status: DataTypes.TEXT,
    note: DataTypes.TEXT,
    address: DataTypes.TEXT,
    totalCost: DataTypes.FLOAT,
    phoneNumber: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
