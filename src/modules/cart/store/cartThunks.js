import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
  applyCoupon,
  removeCoupon,
  getSavedItems,
  moveSavedItemToCart,
  removeSavedItem,
  moveToWishlist,
} from "../services";

const reject = (error, thunkAPI) =>
  thunkAPI.rejectWithValue(
    error?.response?.data?.message || error.message || "Something went wrong"
  );

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      return await getCart();
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (payload, thunkAPI) => {
    try {
      return await addToCart(payload);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const updateItemQuantity = createAsyncThunk(
  "cart/updateItemQuantity",
  async ({ itemId, payload }, thunkAPI) => {
    try {
      return await updateCartItem(itemId, payload);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (itemId, thunkAPI) => {
    try {
      return await removeCartItem(itemId);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const clearUserCart = createAsyncThunk(
  "cart/clearUserCart",
  async (_, thunkAPI) => {
    try {
      return await clearCart();
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const applyCartCoupon = createAsyncThunk(
  "cart/applyCartCoupon",
  async (payload, thunkAPI) => {
    try {
      return await applyCoupon(payload);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const removeCartCoupon = createAsyncThunk(
  "cart/removeCartCoupon",
  async (_, thunkAPI) => {
    try {
      return await removeCoupon();
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const fetchSavedItems = createAsyncThunk(
  "cart/fetchSavedItems",
  async (_, thunkAPI) => {
    try {
      return await getSavedItems();
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const restoreSavedItem = createAsyncThunk(
  "cart/restoreSavedItem",
  async (itemId, thunkAPI) => {
    try {
      return await moveSavedItemToCart(itemId);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const deleteSavedItem = createAsyncThunk(
  "cart/deleteSavedItem",
  async (itemId, thunkAPI) => {
    try {
      return await removeSavedItem(itemId);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);

export const saveForLater = createAsyncThunk(
  "cart/saveForLater",
  async (itemId, thunkAPI) => {
    try {
      return await moveToWishlist(itemId);
    } catch (error) {
      return reject(error, thunkAPI);
    }
  }
);