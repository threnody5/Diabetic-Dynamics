import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  loadingStatus: true,
};

/**
 * Defined slice for managing the users logged in status.
 * - Slice contains two reducers: logIn and logOut.
 * - When logIn is called, loggedIn property is to true.
 * - When logOut is called, loggedOut property is to false.
 */
export const loggedInSlice = createSlice({
  name: 'loggedInStatus',
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
    loadingAccountStatus: (state) => {
      state.loadingStatus = false;
    },
  },
});

export const { logIn, logOut, loadingAccountStatus } = loggedInSlice.actions;
export default loggedInSlice.reducer;
