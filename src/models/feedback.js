'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feedback.belongsTo(models.Product, { foreignKey: 'productID' });
      Feedback.belongsTo(models.Users, { foreignKey: 'userID' });
    }
  };
  Feedback.init({
    feedbackID: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userID: DataTypes.INTEGER,
    productID: DataTypes.STRING(10),
    content: DataTypes.TEXT,
    rate: DataTypes.TINYINT,
    // userID: DataTypes.STRING(10),
    // productID: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
