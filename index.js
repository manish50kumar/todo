import express from "express";
import cors from "cors";
import TaskRoute from "./routes/task.route.js"
import { Sequelize } from "sequelize";
const app = express();
const port = process.env.PORT || 4005;
app.use(cors());
app.use(express.json());

app.use("/task", TaskRoute);

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});



if (sequelize) {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    })
}






