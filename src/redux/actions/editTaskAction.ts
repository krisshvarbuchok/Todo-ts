import { TaskType } from "../reducers/editTaskReducer";

export type ActionType = ReturnType<typeof editTask>

export const editTask = (task: TaskType) => {
    return {
        type: 'EDIT_TASK',
        payload: task
    } as const
}