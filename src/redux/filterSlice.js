import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChange: (state, action) => {
      return { ...state, status: action.payload };
    },
  },
});
export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
