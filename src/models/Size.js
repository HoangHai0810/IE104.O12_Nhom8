'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Size.hasMany(models.Product_Size);
    }
  };
  Size.init({
    sizeID: {
      type: DataTypes.STRING(5),
      primaryKey: true,
      allowNull: false
    },
    size: DataTypes.TEXT,
    gender: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};