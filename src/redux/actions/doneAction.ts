import { DoneType } from "../reducers/doneReducer"

export type ActionsType = ReturnType<typeof doneTask> 
export const doneTask = (task: DoneType) => {
    return {
        type: 'DONE_TASK',
        payload: task
    } as const
}