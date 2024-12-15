import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TaskType = {
    task: string;
}
const initialState: TaskType = {
    task : ''
}
const addTaskSlice = createSlice({
    name: 'addTask',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<TaskType>) => {
            return state = action.payload;
        }
    }
})
export const {addTask} = addTaskSlice.actions;
export default addTaskSlice.reducer;