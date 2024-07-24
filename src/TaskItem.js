
import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, updateTaskStatus } = useContext(TaskContext);

  return (
    <div className="task-item">
      <div className="task-item-details">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-item-actions">
        <button onClick={() => updateTaskStatus(task.id)}>
          {task.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
