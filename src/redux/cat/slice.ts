import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cat, CatSliceState, Status } from './types';
import { fetchCats } from './asyncActions';

const initialState: CatSliceState = {
  cats: [],
  status: Status.LOADING,
};

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<Cat[]>) => {
      state.cats = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchCats.pending, (state) => {
        state.cats = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchCats.rejected, (state) => {
        state.cats = [];
        state.status = Status.ERROR;
      });
  },
});

export const { setCats } = catSlice.actions;

export default catSlice.reducer;
