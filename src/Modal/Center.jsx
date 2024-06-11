import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '/NewProject/src/TasksSlide';
import { Alert } from 'bootstrap';

const Center = () => {
  //method
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('');
  //input method
  const handleAddTask = () => {
    if (newTask.trim() !== '' && newPriority.trim() !== '') {
      dispatch(addTask({ id: tasks.length + 1 , task: newTask, priority: newPriority }));
    }
  };
  //preventdefault
  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  // Center
  return (
    <>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        Add Task
      </button>

      <div
        class="modal fade"
        id="modalId"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"

        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              {/* Header */}
              <h5 class="modal-title" id="modalTitleId">
                Add Task
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* input form */}
            <div class="mb-3 " style={{ padding: '10px' }} onSubmit={handleSubmit}>
              <label for="" class="form-label fw-bolder text-body-emphasis" style={{opacity: '65%'}}>Task</label>
              <input
                type="text"
                class="form-control"
                name="{"
                id=""
                value={newTask}
                placeholder="Text your task in here ..."
                onChange={(event) =>{ setNewTask(event.currentTarget.value)} }
              />
            </div>
            {/* Sellection button */}
            <div style={{ display: 'flex ', justifyContent: 'space-between' , flexDirection: 'row' , padding : '7px' , width: '42vh'}}>
              <button className="btn btn-outline-danger" style={{width: '12vh'}} value={'High'} onClick={()=>{setNewPriority('High')}}>High</button>
              <button className="btn btn-outline-warning" style={{width: '12vh'}} value={'Medium'} onClick={()=>{setNewPriority('Medium')}}>Medium</button>
              <button className="btn btn-outline-success" style={{width: '12vh'}} value={'Low'} onClick={()=>{setNewPriority('Low')}}>Low</button>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAddTask} >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <script>
        const myModal = new bootstrap.Modal(
        document.getElementById("modalId"),
        options,
        );
      </script>
    </>
  )
}
export default Center