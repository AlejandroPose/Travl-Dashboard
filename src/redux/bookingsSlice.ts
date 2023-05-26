import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Booking {
    id: number
    image: string
    guest: string
    orderDate: string
    checkIn: string
    checkOut: string
    specialRequest: string
    roomType: string
    status: string
};

interface BookingsState {
    data?: Booking[]
    uniqueBooking?: Booking
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

export const getBookings = createAsyncThunk( 'bookings/getBookings', 
    async () => {
        const resp = await fetch( "data/bookings.json" );
        const data = await resp.json();
        return await delay( data ) as Booking[];
});

export const getUniqueBooking = createAsyncThunk( 'bookings/getUniqueBooking', 
    async (id) => {
        const resp1 = await fetch( "../data/bookings.json" );
        const data1 = await resp1.json();
        const unique = data1.find( booking => booking.id.toString() === id );
        return await delay( unique ) as Booking;
});

const initialState: BookingsState = {
    data: [],
    uniqueBooking: undefined,
    isSuccess: false,
    message: "",
    isLoading: false,
};

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        updateState: ( state, action ) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookings.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getBookings.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        })
        builder.addCase(getBookings.rejected, (state, { payload }) => {
            state.message = payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
        builder.addCase(getUniqueBooking.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        builder.addCase(getUniqueBooking.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.uniqueBooking = payload;
            state.isSuccess = true;
        })
        builder.addCase(getUniqueBooking.rejected, (state, { payload }) => {
            state.message = payload as string;
            state.isLoading = false;
            state.isSuccess = false;
        })
    },
});

export const { updateState } = bookingsSlice.actions;
export default bookingsSlice;