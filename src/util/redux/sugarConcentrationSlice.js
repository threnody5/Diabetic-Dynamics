import { createSlice } from '@reduxjs/toolkit';

export const sugarConcentrationSlice = createSlice({
  name: 'sugarConcentration',
  initialState: {
    sugarLevelData: [],
  },
  reducers: {
    addSugarLevelData: (state, action) => {
      state.sugarLevelData.push(action.payload);
    },
  },
});

export const { addSugarLevelData } = sugarConcentrationSlice.actions;
export default sugarConcentrationSlice.reducer;
