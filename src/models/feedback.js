'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      feedback.belongsTo(models.product, { foreignKey: 'productID' });
      feedback.belongsTo(models.user, { foreignKey: 'userID' });
    }
  };
  feedback.init({
    feedbackID: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    content: DataTypes.TEXT,
    rate: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};
