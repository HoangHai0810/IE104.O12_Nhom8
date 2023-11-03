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
    modelName: 'Users',
  });
  return Users;
};