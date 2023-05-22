import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice';
import roomsSlice from './roomsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    rooms: roomsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;