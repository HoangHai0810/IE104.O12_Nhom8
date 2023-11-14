'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thamSo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  thamSo.init({
    tenThamSo: DataTypes.STRING,
    giaTri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thamSo',
  });
  return thamSo;
};
