import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const loggedInSlice = createSlice({
  name: 'loggedInStatus',
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
      console.log('Logged Out slice fires');
    },
  },
});

export const { logIn, logOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
