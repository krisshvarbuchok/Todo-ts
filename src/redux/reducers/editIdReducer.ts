import { ActionType } from "../actions/editIdAction";

export type IdType = number | string;
type StateType = {
    editId: IdType;
}
const initialState: StateType = {
    editId: ''
}
type InitialStateType = typeof initialState;


const editIdReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType =>{
    switch(action.type) {
        case 'EDIT_ID_TASK': 
        return {
            ...state,
            editId : action.payload
        };
        default: 
        return state;
    }
}
export default editIdReducer;