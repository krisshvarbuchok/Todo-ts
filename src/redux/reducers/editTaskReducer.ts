import { ActionType } from "../actions/editTaskAction";

export type TaskType = string;
type StateType = {
    taskEdit: TaskType;
}

const initialState: StateType = {
    taskEdit: ''
}
type InitialStateType = typeof initialState;


const editTaskReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type){
        case 'EDIT_TASK':
            return {
                ...state,
                taskEdit: action.payload
            } ;
        default:
            return state;
    }
}
export default editTaskReducer;