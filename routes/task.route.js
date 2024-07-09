import express from 'express';
// Import User model
import { AddTask } from '../controllers/task.controller.js';

const router = express.Router();

// CRUD routes for User model

router.post('/add-task', AddTask);



// module.exports = router;
export default router
