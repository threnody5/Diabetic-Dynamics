import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './loggedInStatusSlice';
import petInfoReducer from './petInfoSlice';
import userIDReducer from './userIDSlice';
import sugarConcentrationReducer from './sugarConcentrationSlice';

export const store = configureStore({
  reducer: {
    loggedInStatus: loggedInReducer,
    petInfo: petInfoReducer,
    userID: userIDReducer,
    sugarConcentration: sugarConcentrationReducer,
  },
});
