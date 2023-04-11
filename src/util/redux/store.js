import { configureStore } from '@reduxjs/toolkit';
import loggedInReducer from './loggedInStatusSlice';
import petInfoReducer from './petInfoSlice';
import userIDReducer from './userIDSlice';
import sugarConcentrationReducer from './sugarConcentrationSlice';
import petIDReducer from './petIDSlice';

/**
 * Creating the redux store with multiple reducers to handle application state.
 */
export const store = configureStore({
  reducer: {
    // Reducer to handle login/logout state.
    loggedInStatus: loggedInReducer,
    // Reducer to handle pet information state.
    petInfo: petInfoReducer,
    // Reducer to handle user ID state.
    userID: userIDReducer,
    // Reducer to handle sugar concentration state.
    sugarConcentration: sugarConcentrationReducer,
    // Reducer to handle the URL ID of the selected pet.
    selectedPetID: petIDReducer,
  },
});
