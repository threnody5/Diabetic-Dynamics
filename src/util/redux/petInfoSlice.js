import { createSlice } from '@reduxjs/toolkit';

export const petInfoSlice = createSlice({
  name: 'petInfo',
  initialState: {
    pet: [],
  },
  reducers: {
    addPet: (state, action) => {
      state.pet.push(action.payload);
    },
  },
});

export const { addPet } = petInfoSlice.actions;
export default petInfoSlice.reducer;
