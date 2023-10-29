'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.order);
      user.hasMany(models.feedback);
    }
  };
  user.init({
    userID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    role: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phoneNumber: DataTypes.TEXT,
    password: DataTypes.TEXT,
    name: DataTypes.TEXT,
    dateOfBirth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};