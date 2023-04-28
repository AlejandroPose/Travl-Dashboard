import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const delay = ( data ) => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( data );
        }, 200);
    });
};

export const getUsers = createAsyncThunk( 'users/getUsers', 
    async () => {
    try {
        const resp = await fetch( "/data/users.json" );
        const data = await resp.json();
        return await delay( data );
    } catch (error) {
        console.log('Error getUsers');
    }
});

export const getUniqueUser = createAsyncThunk( 'users/getUniqueUser', 
    async (id) => {
    try {
        const resp = await fetch( "/data/users.json" );
        const data = await resp.json();
        const unique = data.find( user => user.id.toString() === id );
        return await delay( unique );
    } catch (error) {
        console.log('Error getUsers');
    }
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
    extraReducers: {
        [getUsers.pending]:(state, { payload }) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]:(state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getUsers.rejected]:(state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        },
        [getUniqueUser.pending]:(state, { payload }) => {
            state.isLoading = true;
        },
        [getUniqueUser.fulfilled]:(state, { payload }) => {
            state.isLoading = false;
            state.uniqueUser = payload;
            state.isSuccess = true;
        },
        [getUniqueUser.rejected]:(state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        },
    },
});

export default usersSlice;