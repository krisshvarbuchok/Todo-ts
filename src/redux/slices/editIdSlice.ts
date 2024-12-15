import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
    editId: string;
}
const initialState: StateType = {
    editId: ''
}

const editIdSlice = createSlice({
    name: 'editId',
    initialState,
    reducers: {
        editIdTask: (state, action: PayloadAction<StateType>) => {
            return state = action.payload;
        }
    }
})
export const {editIdTask} = editIdSlice.actions 
export default editIdSlice.reducer
