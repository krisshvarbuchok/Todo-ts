//export const DELETE_TASK = 'DELETE_TASK';
export type ActionsType = ReturnType<typeof deleteTask> 

export const deleteTask = (id: string | number) =>{
    return {
        type: 'DELETE_TASK',
        payload: id
    } as const
}