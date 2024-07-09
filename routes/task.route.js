import express from 'express';
// Import User model
import {
    AddTask,
    UpdateTask,
    GetAllTask
} from '../controllers/task.controller.js';

const router = express.Router();

// CRUD routes for User model

router.post('/add-task', AddTask);
router.post('/update-task/:id', UpdateTask);
router.get('/get-all-task', GetAllTask);



// module.exports = router;
export default router
