import { createSlice } from "@reduxjs/toolkit";
import {
  saveShippingAddress,
  getShippingAddress,
  updateShippingAddress,
  savePaymentMethod,
  getPaymentMethods,
  getCheckoutSummary,
  applyCoupon,
  removeCoupon,
  getShippingMethods,
  placeOrder,
  getOrderConfirmation,
} from "./checkoutThunks";

const initialState = {
  shippingAddress: null,
  paymentMethods: [],
  shippingMethods: [],
  checkoutSummary: null,
  coupon: null,
  order: null,

  loading: false,
  success: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    clearCheckoutError: (state) => {
      state.error = null;
    },

    clearCheckoutSuccess: (state) => {
      state.success = false;
    },

    resetCheckoutState: () => initialState,
  },

  extraReducers: (builder) => {
    builder

      // =========================
      // Shipping Address
      // =========================
      .addCase(saveShippingAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveShippingAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.shippingAddress = action.payload;
      })
      .addCase(saveShippingAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getShippingAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShippingAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.shippingAddress = action.payload;
      })
      .addCase(getShippingAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateShippingAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateShippingAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.shippingAddress = action.payload;
      })
      .addCase(updateShippingAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Payment Methods
      // =========================
      .addCase(savePaymentMethod.pending, (state) => {
        state.loading = true;
      })
      .addCase(savePaymentMethod.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentMethods = action.payload;
      })
      .addCase(savePaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getPaymentMethods.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentMethods.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentMethods = action.payload;
      })
      .addCase(getPaymentMethods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Checkout Summary
      // =========================
      .addCase(getCheckoutSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCheckoutSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutSummary = action.payload;
      })
      .addCase(getCheckoutSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Coupon
      // =========================
      .addCase(applyCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.coupon = action.payload;
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeCoupon.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCoupon.fulfilled, (state) => {
        state.loading = false;
        state.coupon = null;
      })
      .addCase(removeCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Shipping Methods
      // =========================
      .addCase(getShippingMethods.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShippingMethods.fulfilled, (state, action) => {
        state.loading = false;
        state.shippingMethods = action.payload;
      })
      .addCase(getShippingMethods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Place Order
      // =========================
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.order = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =========================
      // Order Confirmation
      // =========================
      .addCase(getOrderConfirmation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderConfirmation.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderConfirmation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearCheckoutError,
  clearCheckoutSuccess,
  resetCheckoutState,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;