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
        const id = req.params.id;
        console.log("id : ", id);
        if (!id) {
            console.log("Id is required in params");
        }
        const { name, task } = req.body;
        if (!name || !task) {
            console.log("Every filed should filed")
        }
        const updatedTask = await Task.update({
            name:name, // Update task name
            task:task// Update task description (optional)
        }, {
            where: {
                id: id
            }
        });

        

        if (updatedTask > 0) {
            const updateTaskfinal = await Task.findOne({ id: id });
            console.log('Task updated successfully!',);
            console.log('Name : ', updateTaskfinal.name);
            console.log('Task : ', updateTaskfinal.task);
            res.status(200).json({ message: "Task updated successfully", updateTaskfinal })
        } else {
            console.log('No task found with id 2');
        }

        
    } catch (error) {
        console.log("Error in update Task : ", error);

    }
}


// get all task
async function GetAllTask(req, res) {
    try {
          
        const allTask = await Task.findAll();
        console.log("All task : ", allTask);
       
        res.status(200).json({ message: "find all Task  successfully", allTask })
    } catch (error) {
        console.log("Error in find all Task : ", error);

    }
}



export {
    AddTask,
    UpdateTask,
    GetAllTask
};