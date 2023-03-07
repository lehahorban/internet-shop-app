import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsOperations";
import { shuffle } from "../../utils/common";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productsSlice.reducer;
export const { filterByPrice, getRelatedProducts } = productsSlice.actions;
