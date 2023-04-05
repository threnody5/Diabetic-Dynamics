import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './loggedInStatusSlice';
import petInfoReducer from './petInfoSlice';
import userIDReducer from './userIDSlice';

export const store = configureStore({
  reducer: {
    loggedInStatus: loggedInReducer,
    petInfo: petInfoReducer,
    userID: userIDReducer,
  },
});
