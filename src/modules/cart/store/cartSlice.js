import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./cartThunks";

const initialState = {
  cart: null,
  savedItems: [],
  loading: false,
  error: null,
};

const pending = (state) => {
  state.loading = true;
  state.error = null;
};

const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(thunks.fetchCart.pending, pending)
      .addCase(thunks.fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(thunks.fetchCart.rejected, rejected)

      .addMatcher(
        (action) =>
          [
            thunks.addItemToCart.fulfilled.type,
            thunks.updateItemQuantity.fulfilled.type,
            thunks.deleteCartItem.fulfilled.type,
            thunks.clearUserCart.fulfilled.type,
            thunks.applyCartCoupon.fulfilled.type,
            thunks.removeCartCoupon.fulfilled.type,
            thunks.restoreSavedItem.fulfilled.type,
            thunks.saveForLater.fulfilled.type,
          ].includes(action.type),
        (state, action) => {
          state.loading = false;
          state.cart = action.payload;
        }
      )

      .addCase(thunks.fetchSavedItems.fulfilled, (state, action) => {
        state.loading = false;
        state.savedItems = action.payload;
      })

      .addCase(thunks.deleteSavedItem.fulfilled, (state, action) => {
        state.loading = false;
        state.savedItems = action.payload;
      })

      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") &&
          action.type.endsWith("/pending"),
        pending
      )

      .addMatcher(
        (action) =>
          action.type.startsWith("cart/") &&
          action.type.endsWith("/rejected"),
        rejected
      );
  },
});

export const { resetCartState } = cartSlice.actions;

export default cartSlice.reducer;