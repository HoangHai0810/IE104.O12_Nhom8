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
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    content: DataTypes.TEXT,
    rate: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
