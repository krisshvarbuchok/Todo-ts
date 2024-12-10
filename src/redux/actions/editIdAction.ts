import { IdType } from "../reducers/editIdReducer";
export type ActionType = ReturnType<typeof editIdTask>;

export const editIdTask = (id: IdType) =>{
    return {
        type: 'EDIT_ID_TASK',
        payload: id
    } as const
}