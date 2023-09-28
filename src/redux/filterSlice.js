import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter/search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setSearchQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
