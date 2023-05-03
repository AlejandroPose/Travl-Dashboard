import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice';
import roomsSlice from './roomsSlice';

export default configureStore({
  reducer: {
    users: usersSlice.reducer,
    rooms: roomsSlice.reducer,
  },
});