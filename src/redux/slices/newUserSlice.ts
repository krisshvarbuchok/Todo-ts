import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUserType } from "../../api/usersAPI";


const initialState: NewUserType = {
    username: "",
    email: "",
    password: "",
    gender: "",
    age: 0,  
};


const newUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<NewUserType>) => {
            return state = action.payload;
        }
    }
})

export const {addNewUser} = newUserSlice.actions;
export default newUserSlice.reducer;