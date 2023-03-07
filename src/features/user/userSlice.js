import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, updateUser } from "./userOperations";
// const addCurrentUser = (state, { payload }) => {
//   state.currentUser = payload;
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: {
    [createUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart } =
  userSlice.actions;

export default userSlice.reducer;
