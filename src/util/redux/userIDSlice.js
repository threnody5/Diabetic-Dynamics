import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

export const userIDSlice = createSlice({
  name: 'userID',
  initialState,
  reducers: {
    addUserID: (state, action) => {
      state.id = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addUserID } = userIDSlice.actions;
export default userIDSlice.reducer;
