import { createSlice } from '@reduxjs/toolkit';

/**
 * Defined slice for adding the users pet to the redux store.
 * - Slice contains two reducers: addPet and loadPets.
 * - When addPet is called, the entered users pet is pushed to the store.
 * - When loadPets is called, the store is set to the payload received.
 */
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
    },
  },
});

export const { addPet, loadPets } = petInfoSlice.actions;
export default petInfoSlice.reducer;
