import { Task } from "../reducers/addTaskReducer"
export type ActionsType = ReturnType<typeof addTask> 

export const addTask = (task: Task) =>{
    return {
        type: 'ADD_TASK',
        payload: task,
    } as const
}