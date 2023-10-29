'use strict';
const {
  Model
} = require('sequelize');
// const doibong = require('./doibong');
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      voucher.hasMany(models.order);
    }
  };
  voucher.init({
    voucherID: {
      type: DataTypes.SRTING(10),
      primaryKey: true,
    },
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'voucher',
  });
  return voucher;
};