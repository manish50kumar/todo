import Task from "../models/task.model.js";
// const User = require('../models/user.model.js')
import { Op }  from 'sequelize'; // Import Sequelize operator

async function AddTask(req, res) {
    try {
        const { name, task} = req.body;
        if (!name || !task) {
            console.log("Every filed should filed")
        }
        const newTask = await Task.create({
            name,
            task
        });
        if (!newTask) {
            console.log("Error while create user");
        }
       
        console.log("Name: ", newTask.name);
        console.log("Task: ", newTask.task);
        res.status(200).json({ message: "Task Added successfully", newTask })
    } catch (error) {
        console.log("Error in Add Task : ", error);

    }
}

// update task
async function UpdateTask(req, res) {
    try {
        const id = req.params;
        if (!id) {
            console.log("Id is required in params");
        }
        const { name, task } = req.body;
        if (!name || !task) {
            console.log("Every filed should filed")
        }
        const updatedTask = await Task.update({
            name, // Update task name
            task// Update task description (optional)
        }, {
            where: {
                id: {
                    [Op.eq]: id // Update where id is equal to 2
                }
            }
        });

        if (updatedTask > 0) {
            console.log('Task updated successfully!',);
            console.log('Name : ',updatedTask.name);
            console.log('Task : ',updatedTask.task);
        } else {
            console.log('No task found with id 2');
        }

        console.log("Name: ", newTask.name);
        console.log("Task: ", newTask.task);
        res.status(200).json({ message: "Task Added successfully", newTask })
    } catch (error) {
        console.log("Error in Add Task : ", error);

    }
}



export { AddTask,UpdateTask };