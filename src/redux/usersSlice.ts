import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        return await delay( data );
});

export const getUniqueUser = createAsyncThunk( 
    'users/getUniqueUser', 
    async (id) => {
        const resp = await fetch( "../data/users.json" );
        const data = await resp.json();
        const unique = data.find( user => user.id.toString() === id );
        return await delay( unique );
});

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
    message?: string
    isLoading: boolean
};

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
        updateState: ( state, action: PayloadAction<User[]> ) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        })
        builder.addCase(getUsers.rejected, (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        })
        builder.addCase(getUniqueUser.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getUniqueUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.uniqueUser = payload;
            state.isSuccess = true;
        })
        builder.addCase(getUniqueUser.rejected, (state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        })
    },
});

export const { updateState } = usersSlice.actions;
export default usersSlice;