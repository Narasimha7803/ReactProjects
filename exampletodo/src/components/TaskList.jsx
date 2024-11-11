import React from 'react';

function TaskList({ tasks, onDelete, onEdit }) {
	return (
		<div>
			<h2>Task List</h2>
			{tasks.length === 0 ? (
				<p>No tasks available</p>
			) : (
				tasks.map((task) => (
					<div key={task.id}>
						<p>
							{task.title} - {task.date}
						</p>
						<button onClick={() => onEdit(task)}>Edit</button>
						<button onClick={() => onDelete(task)}>Delete</button>
					</div>
				))
			)}
		</div>
	);
}

export default TaskList;

