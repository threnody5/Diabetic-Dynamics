import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  petID: null,
};

export const petIDSlice = createSlice({
  name: 'selectedPetID',
  initialState,
  reducers: {
    setPetID: (state, action) => {
      state.petID = action.payload;
    },
  },
});

export const { setPetID } = petIDSlice.actions;
export default petIDSlice.reducer;
