import { AxiosResponse } from 'axios';
import {instance} from './instance';

export const usersApi = {
    getUsers() {
        return instance.get<UsersType[]>('users');
    },
    register(user: NewUserType ) {
        return instance.post<RegisterResponseType, AxiosResponse<RegisterResponseType>, string>('users/register', JSON.stringify(user));
    },
    autent(user: UserAutent) {
        return instance.post<RegisterResponseType, AxiosResponse<RegisterResponseType>, UserAutent>('auth/login', user);
    },
    getTodos() {
        return instance.get<ListType[]>('todos');
    },
    postTodos(title: string) {
        return instance.post<ListType, AxiosResponse<ListType>, { title: string }>('todos', {title});
    },
    deleteTodos(id: string){
        return instance.delete<ListType>(`/todos/${id}`);
    },
    editTodos(id: string, title: string){
        return instance.patch<ListType, AxiosResponse<ListType>,{title: string} >(`/todos/${id}`, {title});
    },
    isCompletedTodos(id: string, isCompleted: boolean) {
        return instance.patch<ListType, AxiosResponse<ListType>>(`/todos/${id}/isCompleted`, {
            isCompleted,
        });
    }
}

export type ListType = {
    id: string;
    title: string;
    isCompleted: boolean;
    user_id: number;
}
export type UsersType = {
    id: number;
    username: string;
    email: string;
    age: number;
    gender: string;
}
export type NewUserType = {
	username: string;
	email: string;
	password: string;
	gender: string;
	age: number;
}

export type RegisterResponseType = {
    success?: string;
    message?: string;
    token?: string;
}

export type UserAutent = {
    email: string;
    password: string;
}
// export type NewUserType = Omit<UserType, 'id'> & {
//     password: string
// }