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
            Customer.belongsToOne(models.Users, { foreignKey: 'userID' })
        }
    };
    Customer.init({
        customerID: {
            type: DataTypes.STRING(10),
            primaryKey: true,
        },
        name: DataTypes.TEXT,
        userID: DataTypes.STRING(10)
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};