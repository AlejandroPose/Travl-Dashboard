import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const delay = ( data ) => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( data );
        }, 200);
    });
};

export const getRooms = createAsyncThunk( 'rooms/getRooms', 
    async () => {
    try {
        const resp = await fetch( "data/rooms.json" );
        const data = await resp.json();
        return await delay( data );
    } catch (error) {
        console.log('Error getRooms');
    }
});

export const getUniqueRoom = createAsyncThunk( 'rooms/getUniqueRoom', 
    async (id) => {
    try {
        const resp1 = await fetch( "../data/rooms.json" );
        const data1 = await resp1.json();
        const unique = data1.find( room => room.id.toString() === id );
        return await delay( unique );
    } catch (error) {
        console.log('Error getUniqueRoom');
    }
});

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        data: [],
        uniqueRoom: {},
        isSuccess: false,
        message: "",
        isLoading: false,
    },
    reducers: {
        updateState: ( state, action ) => {
            state.data = action.payload;
        }
    },
    extraReducers: {
        [getRooms.pending]:(state, { payload }) => {
            state.isLoading = true;
        },
        [getRooms.fulfilled]:(state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getRooms.rejected]:(state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        },
        [getUniqueRoom.pending]:(state, { payload }) => {
            state.isLoading = true;
        },
        [getUniqueRoom.fulfilled]:(state, { payload }) => {
            state.isLoading = false;
            state.uniqueRoom = payload;
            state.isSuccess = true;
        },
        [getUniqueRoom.rejected]:(state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        },
    },
});

export const { updateState } = roomsSlice.actions;
export default roomsSlice;