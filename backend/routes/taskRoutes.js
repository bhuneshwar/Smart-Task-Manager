const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createTask);       // Create a new task
router.get('/', protect, getTasks);         // Get all tasks for the user
router.put('/:id', protect, updateTask);    // Update a task
router.delete('/:id', protect, deleteTask); // Delete a task

module.exports = router;
