import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './logged-in-status';

export const store = configureStore({
  reducer: {
    loggedInStatus: loggedInReducer,
  },
});
