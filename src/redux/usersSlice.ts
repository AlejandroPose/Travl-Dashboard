import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi, fetchGet } from "../functions/fetchApi";

interface User {
    _id: string
    name: string
    job_description: string
    phone: string
    schedule: string
    image: string
    email: string
    password: string
    status?: string
};

interface UserNew {
    name: string
    job_description: string
    phone: string
    schedule: string
    image: string
};

interface UsersState {
    data?: User[]
    uniqueUser?: User
    isSuccess: boolean
    message: string
    isLoading: boolean
};

export const getUsers = createAsyncThunk( 
    'users/getUsers', 
    async () => {
        const resp = await fetchGet('/users');
        return resp as User[];
});

export const getUniqueUser = createAsyncThunk( 
    'users/getUniqueUser', 
    async (id: string) => {
        const resp = await fetchGet(`/users/${id}`);
        return await resp as User;
});

export const postUser = createAsyncThunk( 
    'users/postUser', 
    async (obj: UserNew) => {
        const resp = await fetchApi(`/users`, 'POST', obj);
        return await resp as User;
});

// export const putUser = createAsyncThunk( 
//     'users/putUser', 
//     async (id: string, obj: UserNew) => {
//         const resp = await fetchApi(`/users/${id}`, 'PUT', obj);
//         return await resp as User;
// });

const initialState: UsersState = {
    data: [],
    uniqueUser: undefined,
    isSuccess: false,
    message: "",
    isLoading: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateState: ( state, action ) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isSuccess = true;
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.message = action.payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
        builder.addCase(getUniqueUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getUniqueUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.uniqueUser = action.payload;
            state.isSuccess = true;
        })
        builder.addCase(getUniqueUser.rejected, (state, action) => {
            state.message = action.payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
        builder.addCase(postUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(postUser.rejected, (state, action) => {
            state.message = action.payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
        // builder.addCase(putUser.pending, (state, action) => {
        //     state.isLoading = true;
        // })
        // builder.addCase(putUser.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSuccess = true;
        // })
        // builder.addCase(putUser.rejected, (state, action) => {
        //     state.message = action.payload as string;
        //     state.isLoading = false;
        //     state.isSuccess = false;
        // })
    },
});

export const { updateState } = usersSlice.actions;
export default usersSlice;