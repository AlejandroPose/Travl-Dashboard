import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice';
import roomsSlice from './roomsSlice';
import bookingsSlice from './bookingsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    rooms: roomsSlice.reducer,
    bookings: bookingsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;