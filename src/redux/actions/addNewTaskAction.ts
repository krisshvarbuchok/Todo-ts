import { ListType } from "../reducers/listReducer";

export type ActionsType = ReturnType<typeof addNewTask> 

export const addNewTask = (list: ListType) =>{
    return{
        type: 'ADD_NEW_TASK',
        payload: list,
    } as const
}