
import { addEditedTask } from "../actions/addEditAction";
import { addNewTask } from "../actions/addNewTaskAction";
import { deleteTask } from "../actions/deleteAction";

export type ListType = {
    id: number | string;
    task: string;
}
const initialState = {
    list: [
        { id: 1, task: 'купить хлеб' },
        { id: 2, task: 'вычесать кота' },
        { id: 3, task: 'принять душ' },
    ] as ListType[]
}

type InitialStateType = typeof initialState
export type ActionsType = ReturnType<typeof addNewTask> | ReturnType<typeof deleteTask> | ReturnType<typeof addEditedTask>

const listReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_NEW_TASK':
            return {
                ...state,
                list:[...state.list, {...action.payload}]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            };
        case 'ADD_EDITED_TASK':
            return{
                ...state,
                list:state.list.map(item => item.id === action.payload.id ? { ...item, task: action.payload.task } : item)
            }
        default: 
        return state;
    }
}
export default listReducer;