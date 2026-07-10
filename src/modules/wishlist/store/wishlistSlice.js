import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishlist,
  fetchWishlistItem,
  createWishlistItem,
  deleteWishlistItem,
  clearWishlistItems,
  moveWishlistItemToCart,
} from "./wishlistThunks";

const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clearSelectedWishlistItem(state) {
      state.selectedItem = null;
    },
    clearWishlistError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Single Item
      .addCase(fetchWishlistItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlistItem.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchWishlistItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Item
      .addCase(createWishlistItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Delete Item
      .addCase(deleteWishlistItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload
        );
      })

      // Clear Wishlist
      .addCase(clearWishlistItems.fulfilled, (state) => {
        state.items = [];
      })

      // Move to Cart
      .addCase(moveWishlistItemToCart.fulfilled, (state, action) => {
        const movedId = action.meta.arg;
        state.items = state.items.filter(
          (item) => item._id !== movedId
        );
      });
  },
});

export const {
  clearSelectedWishlistItem,
  clearWishlistError,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;