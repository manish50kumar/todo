import  { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = require('../database'); // Import the Sequelize instance

class User extends Model { }
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;

