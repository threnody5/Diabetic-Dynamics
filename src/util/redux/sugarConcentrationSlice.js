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
      state.sugarLevelData = action.payload;
    },
    loadEntries: (state, action) => {
      state.sugarLevelData = action.payload;
    },
    RemoveSelectedEntry: (state, action) => {
      // Variable assigned to the result of the filter, where the compared IDs do not match.
      const updatedEntries = state.sugarLevelData.filter(
        (entry) => entry.entryID !== action.payload
      );
      state.sugarLevelData = updatedEntries;
    },
  },
});

export const { addSugarLevelData, loadEntries, RemoveSelectedEntry } =
  sugarConcentrationSlice.actions;
export default sugarConcentrationSlice.reducer;
