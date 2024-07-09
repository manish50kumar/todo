import Task from "../models/task.model.js";
// const User = require('../models/user.model.js')

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

export { AddTask };