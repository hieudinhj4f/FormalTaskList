import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from '/NewProject/src/TasksSlide'
// Store create
export const store = configureStore({
    reducer: {
        tasks: TaskReducer,
    },
})
//export store
export default store 