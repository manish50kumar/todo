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
            // console.log('Task updated successfully!',);
            // console.log('Name : ', updateTaskfinal.name);
            // console.log('Task : ', updateTaskfinal.task);
            res.status(200).json({ message: "Task updated successfully", updateTaskfinal })
        } else {
            console.log('No task found with id ',id);
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

// delete task
async function DeleteTask(req, res) {
    try {
        const { id } = req.params; // Assuming the ID is passed in request parameters

        if (!id) {
            console.log("Id is required in params");
            return res.status(400).json({ message: "Missing required parameter: id" });
        }

        const deletedCount = await Task.destroy({
            where: {
                id: id
            }
        });

        if (deletedCount > 0) {
            console.log('Task deleted successfully!');
            res.status(200).json({ message: "Task deleted successfully" });
        } else {
            console.log('No task found with id:', id);
            res.status(404).json({ message: "No task found with the provided id" });
        }
    } catch (error) {
        console.error("Error in delete Task : ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


// task complete 
async function CompleteTask(req, res) {
    try {
        const { id } = req.body; // Destructure id from request body
        console.log("id : ", id);

        if (!id) {
            console.log("Id is required in body");
            return res.status(400).json({ message: "Missing required parameter: id" });
        }

        const updatedTask = await Task.update({
            status: true // Mark task as completed
        }, {
            where: {
                id: id
            }
        });

        if (updatedTask > 0) {
            
            const updatedTaskFinal = await Task.findOne({ id: id }); 
            console.log('Task completed successfully!', id,updatedTaskFinal);
            res.status(200).json({ message: "Task completed successfully", updatedTaskFinal });
        } else {
            console.log('No task found with id:', id);
            res.status(404).json({ message: "No task found with the provided id" });
        }
    } catch (error) {
        console.error("Error in complete Task : ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



export {
    AddTask,
    UpdateTask,
    GetAllTask,
    DeleteTask,
    CompleteTask
};