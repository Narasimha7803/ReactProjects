
import React, { useState } from 'react';

function AddTask({ onSave, onCancel, taskToEdit }) {
	const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
	const [date, setDate] = useState(taskToEdit ? taskToEdit.date : '');

	const handleSave = () => {
		if (!title || !date) return;

		const newTask = {
			id: taskToEdit ? taskToEdit.id : new Date().getTime(),
			title,
			date,
		};

		onSave(newTask);
	};

	return (
		<div>
			<h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
			<label>Task Title:</label>
			<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			<br />
			<label>Task Date:</label>
			<input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
			<br />
			<button onClick={handleSave}>Save</button>
			<button onClick={onCancel}>Cancel</button>
		</div>
	);
}

export default AddTask;

