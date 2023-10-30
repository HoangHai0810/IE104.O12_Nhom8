'use strict';
const {
  Model
} = require('sequelize');
// const doibong = require('./doibong');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Voucher.hasMany(models.Order);
    }
  };
  Voucher.init({
    voucherID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};