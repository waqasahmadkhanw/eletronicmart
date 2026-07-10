// modules/addresses/store/addressSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddresses,
  fetchAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "./addressThunks";

const initialState = {
  addresses: [],
  currentAddress: null,
  loading: false,
  success: false,
  error: null,
};

const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    clearCurrentAddress: (state) => {
      state.currentAddress = null;
    },
    clearAddressError: (state) => {
      state.error = null;
    },
    resetAddressState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Address By Id
      .addCase(fetchAddressById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddressById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.currentAddress = action.payload;
      })
      .addCase(fetchAddressById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Address
      .addCase(createAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.addresses.push(action.payload);
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Address
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.addresses = state.addresses.map((address) =>
          address._id === action.payload._id ? action.payload : address
        );

        if (
          state.currentAddress &&
          state.currentAddress._id === action.payload._id
        ) {
          state.currentAddress = action.payload;
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.addresses = state.addresses.filter(
          (address) => address._id !== action.meta.arg
        );

        if (
          state.currentAddress &&
          state.currentAddress._id === action.meta.arg
        ) {
          state.currentAddress = null;
        }
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Set Default Address
      .addCase(setDefaultAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setDefaultAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.addresses = state.addresses.map((address) => ({
          ...address,
          isDefault: address._id === action.payload._id,
        }));

        state.currentAddress = action.payload;
      })
      .addCase(setDefaultAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearCurrentAddress,
  clearAddressError,
  resetAddressState,
} = addressSlice.actions;

export default addressSlice.reducer;