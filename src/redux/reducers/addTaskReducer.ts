import { ActionsType } from "../actions/addTaskAction";
export type Task = string;
type TaskType = {
    task: Task;
}
const initialState: TaskType = {
    task : ''
}
type InitialStateType = typeof initialState;
const addTaskReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType =>{
    switch(action.type) {
        case 'ADD_TASK': 
        return {
            ...state,
            task: action.payload
        }
        default:
            return state;
    }
}
export default addTaskReducer;