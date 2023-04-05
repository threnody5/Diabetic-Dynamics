import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './loggedInStatusSlice';
import petInfoReducer from './petInfoSlice';

export const store = configureStore({
  reducer: {
    loggedInStatus: loggedInReducer,
    petInfo: petInfoReducer,
  },
});
