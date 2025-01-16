const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, user: req.user.id });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const { category, priority, sort } = req.query;
        const query = { user: req.user.id };

        if (category) query.category = category;
        if (priority) query.priority = priority;

        const tasks = await Task.find(query).sort(sort ? { dueDate: sort === 'asc' ? 1 : -1 } : {});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        if (task.user.toString() !== req.user.id)
            return res.status(401).json({ message: 'Not authorized' });

        // Allow status updates
        if (req.body.status) task.status = req.body.status;

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        if (task.user.toString() !== req.user.id)
            return res.status(401).json({ message: 'Not authorized' });

        await task.remove();
        res.status(200).json({ message: 'Task removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
