'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customer.hasMany(models.Order);
            Customer.belongsTo(models.Users, { foreignKey: 'userID' })
        }
    };
    Customer.init({
        customerID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
        },
        fullName: DataTypes.TEXT,
        dateOfBirth: DataTypes.DATE,
        phoneNumber: DataTypes.STRING(10),
        nativeVillage: DataTypes.TEXT,
        userID: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};