import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
    id: number
    name: string
    job_description: string
    phone: string
    schedule: number[]
    status: string
    image: string
};

interface UsersState {
    data?: User[]
    uniqueUser?: User
    isSuccess: boolean
    message: string
    isLoading: boolean
};

const delay = ( data ) => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( data );
        }, 200);
    });
};

export const getUsers = createAsyncThunk( 
    'users/getUsers', 
    async () => {
        const resp = await fetch( "data/users.json" );
        const data = await resp.json();
        return await delay( data ) as User[];
});

export const getUniqueUser = createAsyncThunk( 
    'users/getUniqueUser', 
    async (id: string) => {
        const resp = await fetch( "../data/users.json" );
        const data = await resp.json();
        const unique = data.find( user => user.id.toString() === id );
        return await delay( unique ) as User;
});

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
    },
});

export const { updateState } = usersSlice.actions;
export default usersSlice;