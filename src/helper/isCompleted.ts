import { ListType } from "../api/usersAPI";

export const isCompletedFunction = (data: ListType[], id: string):boolean  => {
    const item = data.find(item => item.id === id);
    return item ? item.isCompleted : false;  
}