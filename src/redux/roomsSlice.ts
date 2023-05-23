import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Room {
    id: number
    image: string
    name: string
    bed_type: string
    facilities: string
    price: number
    offer: boolean
    discount: number | null
    status: string
};

interface RoomsState {
    data?: Room[]
    uniqueRoom?: Room
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

export const getRooms = createAsyncThunk( 'rooms/getRooms', 
    async () => {
        const resp = await fetch( "data/rooms.json" );
        const data = await resp.json();
        return await delay( data ) as Room[];
});

export const getUniqueRoom = createAsyncThunk( 'rooms/getUniqueRoom', 
    async (id) => {
        const resp1 = await fetch( "../data/rooms.json" );
        const data1 = await resp1.json();
        const unique = data1.find( room => room.id.toString() === id );
        return await delay( unique ) as Room;
});

const initialState: RoomsState = {
    data: [],
    uniqueRoom: undefined,
    isSuccess: false,
    message: "",
    isLoading: false,
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        updateState: ( state, action ) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRooms.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getRooms.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        })
        builder.addCase(getRooms.rejected, (state, { payload }) => {
            state.message = payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
        builder.addCase(getUniqueRoom.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getUniqueRoom.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.uniqueRoom = payload;
            state.isSuccess = true;
        })
        builder.addCase(getUniqueRoom.rejected, (state, { payload }) => {
            state.message = payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
    },
});

export const { updateState } = roomsSlice.actions;
export default roomsSlice;