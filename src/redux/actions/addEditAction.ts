export type ActionType = ReturnType <typeof addEditedTask>

export const addEditedTask = (id: (string | number), task: string ) => {
    return{
        type: 'ADD_EDITED_TASK',
        payload: {task: task, id: id},
    } as const
}