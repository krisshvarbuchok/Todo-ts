import { createSlice } from "@reduxjs/toolkit";
import { ListType, usersApi } from "../../api/usersAPI";
import { createAppAsyncThunk } from "../../hooks/hooks";


const fetchGetTodos = createAppAsyncThunk<ListType[], undefined>(
    'todos/fetchGetTodos',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const { data } = await usersApi.getTodos();
            console.log(data);

            return data;
        } catch (error) {
            const err = error as { message: string };
            return rejectWithValue(err.message);
        }
    }
);
const fetchPostTodos = createAppAsyncThunk<ListType, string>('todos/fetchPostTodos', async (title: string) => {
    const { data } = await usersApi.postTodos(title);
    console.log(data);
    return data
})

const fetchDeleteTask = createAppAsyncThunk<ListType, string>('task/fetchDeleteTask', async (id: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const { data } = await usersApi.deleteTodos(id);
        console.log(data);
        return data;
    } catch (e) {
        const error = e as { message: string }
        return rejectWithValue(error.message)
    }
})

const fetchEditTask = createAppAsyncThunk<ListType, { id: string; title: string }>('task/fetchEditTask', async ({ id, title }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const { data } = await usersApi.editTodos(id, title);
        console.log(data);
        return data;
    } catch (e) {
        const error = e as { response?: { data: { errors: { msg: string; param: string }[] } } };
        if (error.response?.data?.errors) {
            const errorMessages = error.response.data.errors.map((err) => `${err.param}: ${err.msg}`).join('; ');
            return rejectWithValue(errorMessages);
        }
        return rejectWithValue('Unknown error occurred');
    }
})

const fetchEditIsCompleted = createAppAsyncThunk<ListType, { id: string; isCompleted: boolean }>(
    'task/fetchEditIsCompleted',
    async ({ id, isCompleted }, thunkAPI) => {
        try {
            const response = await usersApi.isCompletedTodos(id, isCompleted);
            console.log(response.data);
            const updatedTask = Array.isArray(response.data) ? response.data[0] : response.data;
            return updatedTask; 
        } catch (error) {
            const errorMessage = (error as { message: string }).message || 'Something went wrong';
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    list: null as ListType[] | null,
    status: 'idle' as RequestStatusType,
    error: null as string | null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(fetchGetTodos.pending, (state) => {
            //     state.status = 'loading';
            //     state.error = null;
            // })
            .addCase(fetchGetTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            // .addCase(fetchGetTodos.rejected, (state, action) => {
            //     state.status = 'failed';
            //     if (action.payload) {
            //         state.error = action.payload
            //     }
            // })
            .addCase(fetchPostTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list?.push(action.payload);
            })
            .addCase(fetchDeleteTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (state.list !== null) {
                    state.list = state.list.filter(item => item.id !== action.payload.id);
                }
            })
            .addCase(fetchEditTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (state.list !== null) {
                    state.list = state.list.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title } : item);
                }
            })
            .addCase(fetchEditIsCompleted.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (state.list !== null) {
                    console.log('я сработал!');
                    console.log(action.payload);


                    state.list = state.list.map(item => item.id === action.payload.id ? { ...item, isCompleted: action.payload.isCompleted } : item);
                }
            })

    }
})

export { fetchGetTodos, fetchPostTodos, fetchDeleteTask, fetchEditTask, fetchEditIsCompleted }
export default todoSlice.reducer;
