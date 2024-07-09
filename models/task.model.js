import { Sequelize, Model, DataTypes } from 'sequelize';

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',   
    storage: '../database.sqlite'

});
// Define User model
class Task extends Model { }
Task.init({
    name: DataTypes.STRING,
    task: DataTypes.STRING,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
}, { sequelize, modelName: 'task' });

// Sync models with database
sequelize.sync();
export default Task;