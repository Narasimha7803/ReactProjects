import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks'));
		if (savedTasks) {
			setTasks(savedTasks);
		}
	}, []);

	const saveTasksToLocalStorage = (updatedTasks) => {
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	return (
		<div className='App'>
			<h1>Todo App</h1>
			<button onClick={() => setShowAddTask(true)}>Add Task</button>

			{showAddTask ? (
				<AddTask
					onSave={(newTask) => {
						saveTasksToLocalStorage([...tasks, newTask]);
						setShowAddTask(false);
					}}
					onCancel={() => setShowAddTask(false)}
				/>
			) : (
				<TaskList
					tasks={tasks}
					onDelete={(taskToDelete) => {
						const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
						saveTasksToLocalStorage(updatedTasks);
					}}
					onEdit={(updatedTask) => {
						const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
						saveTasksToLocalStorage(updatedTasks);
					}}
				/>
			)}
		</div>
	);
}

export default App;


