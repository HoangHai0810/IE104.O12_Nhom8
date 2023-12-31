'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Color.belongsToMany(models.Product, { through: 'Product_Color', foreignKey: 'colorID' })
      Color.hasMany(models.Cart_Detail, { foreignKey: 'colorID' })
    }
  };
  Color.init({
    colorID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(20)
    },
    colorName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};