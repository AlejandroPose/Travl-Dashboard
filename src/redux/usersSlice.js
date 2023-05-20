import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        uniqueUser: {},
        isSuccess: false,
        message: "",
        isLoading: false,
    },
    reducers: {
        updateState: ( state, action ) => {
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