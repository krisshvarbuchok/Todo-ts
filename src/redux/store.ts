import { configureStore } from '@reduxjs/toolkit';
import addTaskSlice from './slices/addTaskSlice';
import editIdSlice from './slices/editIdSlice';
import editTaskSlice from './slices/editTaskSlice';
import newUserSlice from './slices/newUserSlice'
import todoSlice from './slices/todoListSlice'

export const store = configureStore({
    reducer: {
        list: todoSlice,
        task: addTaskSlice,
        editId: editIdSlice,
        taskEdit: editTaskSlice,
        newUser: newUserSlice,
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

