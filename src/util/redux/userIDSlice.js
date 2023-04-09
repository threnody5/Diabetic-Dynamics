import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

/**
 * Defined slice for adding the users ID to the store.
 * - Slice contains one reducer: addUserID.
 * - When addUserID is called, the store is set to the payload received.
 */
export const userIDSlice = createSlice({
  name: 'userID',
  initialState,
  reducers: {
    addUserID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { addUserID } = userIDSlice.actions;
export default userIDSlice.reducer;
