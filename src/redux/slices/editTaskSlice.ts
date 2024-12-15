import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
    taskEdit: string;
}

const initialState: StateType = {
    taskEdit: ''
}
const editTaskSlice = createSlice( {
    name: 'editTask',
    initialState,
    reducers: {
        editTask: (state, action: PayloadAction<StateType>) =>{
            return state = action.payload;
        }
    }
})
export const {editTask} = editTaskSlice.actions;
export default editTaskSlice.reducer;
