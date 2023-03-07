import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesOperations";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    },
    [getCategories.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default categoriesSlice.reducer;
