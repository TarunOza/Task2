
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const UpdateTask = ({ task, closeModal }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const { updateTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...task, title, description });
    closeModal();
  };

  return (
    <div className="update-task">
      <form className="update-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Update Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
