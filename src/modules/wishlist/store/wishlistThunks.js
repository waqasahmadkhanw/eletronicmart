import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getWishlist,
  getWishlistItem,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  moveToCart,
} from "../services";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, thunkAPI) => {
    try {
      return await getWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch wishlist."
      );
    }
  }
);

export const fetchWishlistItem = createAsyncThunk(
  "wishlist/fetchWishlistItem",
  async (id, thunkAPI) => {
    try {
      return await getWishlistItem(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch wishlist item."
      );
    }
  }
);

export const createWishlistItem = createAsyncThunk(
  "wishlist/createWishlistItem",
  async (payload, thunkAPI) => {
    try {
      return await addToWishlist(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to add item."
      );
    }
  }
);

export const deleteWishlistItem = createAsyncThunk(
  "wishlist/deleteWishlistItem",
  async (id, thunkAPI) => {
    try {
      await removeFromWishlist(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to remove item."
      );
    }
  }
);

export const clearWishlistItems = createAsyncThunk(
  "wishlist/clearWishlistItems",
  async (_, thunkAPI) => {
    try {
      return await clearWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to clear wishlist."
      );
    }
  }
);

export const moveWishlistItemToCart = createAsyncThunk(
  "wishlist/moveWishlistItemToCart",
  async (id, thunkAPI) => {
    try {
      return await moveToCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to move item to cart."
      );
    }
  }
);