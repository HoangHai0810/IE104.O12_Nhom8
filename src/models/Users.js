'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Feedback);
      Users.hasOne(models.Customer);
    }
  };
  Users.init({
    userID: {
      type: DataTypes.STRING(10),
      autoIncrement: true,
      primaryKey: true,
    },
    userName: DataTypes.TEXT,
    userPassword: DataTypes.TEXT,
    role: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};