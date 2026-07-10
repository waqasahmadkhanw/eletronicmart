// modules/addresses/store/addressThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as addressService from "../services";

// Get all addresses
export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (params = {}, thunkAPI) => {
    try {
      return await addressService.getAddresses(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch addresses."
      );
    }
  }
);

// Get address by ID
export const fetchAddressById = createAsyncThunk(
  "addresses/fetchAddressById",
  async (id, thunkAPI) => {
    try {
      return await addressService.getAddressById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch address."
      );
    }
  }
);

// Create address
export const createAddress = createAsyncThunk(
  "addresses/createAddress",
  async (payload, thunkAPI) => {
    try {
      return await addressService.createAddress(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create address."
      );
    }
  }
);

// Update address
export const updateAddress = createAsyncThunk(
  "addresses/updateAddress",
  async ({ id, payload }, thunkAPI) => {
    try {
      return await addressService.updateAddress(id, payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update address."
      );
    }
  }
);

// Delete address
export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (id, thunkAPI) => {
    try {
      return await addressService.deleteAddress(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete address."
      );
    }
  }
);

// Set default address
export const setDefaultAddress = createAsyncThunk(
  "addresses/setDefaultAddress",
  async (id, thunkAPI) => {
    try {
      return await addressService.setDefaultAddress(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to set default address."
      );
    }
  }
);