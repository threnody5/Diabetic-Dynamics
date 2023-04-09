import { createSlice } from '@reduxjs/toolkit';

/**
 * Defined slice for adding the users blood glucose entries to the store.
 * - Slice contains two reducers: addSugarLevelData and loadEntries.
 * - When addSugarLevelData is called, new entry create by the user is added to the store.
 * - When loadEntries is called, the store is set to the payload received.
 */
export const sugarConcentrationSlice = createSlice({
  name: 'sugarConcentration',
  initialState: {
    sugarLevelData: [],
  },
  reducers: {
    addSugarLevelData: (state, action) => {
      state.sugarLevelData.push(action.payload);
    },
    loadEntries: (state, action) => {
      state.sugarLevelData = action.payload;
      console.log('Entries from state: ', action.payload);
    },
  },
});

export const { addSugarLevelData, loadEntries } =
  sugarConcentrationSlice.actions;
export default sugarConcentrationSlice.reducer;
