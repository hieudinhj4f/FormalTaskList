import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask , deleteTask, updateTaskStatus, updateTaskPriority } from '/NewProject/src/TasksSlide';

const StateManage = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ id: tasks.length + 1, task: newTask }));
      setNewTask('');
    }
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleUpdateStatus = (id, status) => {
    dispatch(updateTaskStatus({ id, status }));
  };

  const handleUpdatePriority = (id, priority) => {
    dispatch(updateTaskPriority({ id, priority }));
  };

  if (!tasks || !Array.isArray(tasks)) {
    return <div>No tasks available</div>;
  }
  return (
    <>
    <div className="container mt-5">
      {tasks.map(task => (
        <div className="task-container d-flex align-items-center mb-3" key={task.id}>
          <div className="flex-grow-1">{task.task}</div>
          <div className={`priority mx-3 text-${task.priority.toLowerCase()}`}>{task.priority}</div>
          <div className="status me-3">{task.status}</div>
          <div className="actions d-flex align-items-center">
            <input type="checkbox" className="form-check-input me-3" checked={task.status === 'Done'} onChange={() => handleUpdateStatus(task.id, task.status === 'Done' ? 'To Do' : 'Done')} />
            <div className="edit me-2" style={{ cursor: 'pointer' }}>✏️</div>
            <div className="delete" style={{ cursor: 'pointer' }} onClick={() => handleDeleteTask(task.id)}>🗑️</div>  
          </div>

        </div>
      ))}
    </div>

    </>
  );
};

export default StateManage;
