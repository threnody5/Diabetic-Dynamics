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
    loadPets: (state, action) => {
      state.pet = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addPet, loadPets } = petInfoSlice.actions;
export default petInfoSlice.reducer;
