import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    const handleTaskCreated = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <CreateTask onTaskCreated={handleTaskCreated} />
            <TaskList />
        </div>
    );
};

export default Dashboard;
