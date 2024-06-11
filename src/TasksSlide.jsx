import { createSlice } from "@reduxjs/toolkit";

//Set up default interface
const initialState = [
    { id: 1, task: 'Go to gym', priority: 'High', status: 'To Do' },
    { id: 2, task: 'Read a book', priority: 'Low', status: 'Done' },
    { id: 3, task: 'Go to market', priority: 'Medium', status: 'In Progress' },
  ];
//
const TasksSlide = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask : (state, action) => {
            state.push(action.payload)
        },

        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
          },
    
        updateTaskStatus : (state, action) =>{
            const task = state.find(task => task.id === action.payload.id)
            if (task){
                task.status= action.payload.status;
            }
        },
        updateTaskPriority : (state, action) =>{
            const task = state.find(task => task.id === action.payload.id)
            if (task){
                task.priority= action.payload.priority;
            }
        }
    } 
})

//export 
export const {addTask, deleteTask, updateTaskStatus , updateTaskPriority} = TasksSlide.actions
export default TasksSlide.reducer