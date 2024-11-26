import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../API/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (newTask.trim()) {
      const task = { title: newTask, description: '', done: false };
      await createTask(task);
      fetchTasks();  // Refresh tasks list
      setNewTask('');
    }
  };

  const handleUpdateTask = async (task) => {
    const updatedTask = { ...task, done: !task.done };
    await updateTask(task.id, updatedTask);
    fetchTasks();  // Refresh tasks list
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();  // Refresh tasks list
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => handleUpdateTask(task)}>
              {task.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskList;
