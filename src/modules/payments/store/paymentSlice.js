// modules/payments/store/paymentSlice.js

import { createSlice } from "@reduxjs/toolkit";

import {
  getPaymentsThunk,
  getPaymentByIdThunk,
  createPaymentThunk,
  updatePaymentThunk,
  deletePaymentThunk,
  refundPaymentThunk,
  capturePaymentThunk,
  cancelPaymentThunk,
  verifyPaymentThunk,
  getPaymentMethodsThunk,
  downloadInvoiceThunk,
} from "./paymentThunks";

const initialState = {
  payments: [],
  payment: null,
  paymentMethods: [],

  loading: false,
  success: false,
  error: null,
  message: null,
};

const paymentSlice = createSlice({
  name: "payments",

  initialState,

  reducers: {
    clearPayment(state) {
      state.payment = null;
    },

    clearPayments(state) {
      state.payments = [];
    },

    clearError(state) {
      state.error = null;
    },

    clearSuccess(state) {
      state.success = false;
      state.message = null;
    },

    resetPaymentState(state) {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Get Payments
      // ==========================
      .addCase(getPaymentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPaymentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payments = action.payload;
      })
      .addCase(getPaymentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Get Payment By Id
      // ==========================
      .addCase(getPaymentByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
      })
      .addCase(getPaymentByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Create Payment
      // ==========================
      .addCase(createPaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.message = "Payment created successfully.";
      })
      .addCase(createPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Update Payment
      // ==========================
      .addCase(updatePaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.message = "Payment updated successfully.";
      })
      .addCase(updatePaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Delete Payment
      // ==========================
      .addCase(deletePaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePaymentThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.message = "Payment deleted successfully.";
      })
      .addCase(deletePaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Refund Payment
      // ==========================
      .addCase(refundPaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundPaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.message = "Payment refunded successfully.";
      })
      .addCase(refundPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Capture Payment
      // ==========================
      .addCase(capturePaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(capturePaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.message = "Payment captured successfully.";
      })
      .addCase(capturePaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Cancel Payment
      // ==========================
      .addCase(cancelPaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(cancelPaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
        state.message = "Payment cancelled successfully.";
      })
      .addCase(cancelPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Verify Payment
      // ==========================
      .addCase(verifyPaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payment = action.payload;
      })
      .addCase(verifyPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Payment Methods
      // ==========================
      .addCase(getPaymentMethodsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentMethodsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.paymentMethods = action.payload;
      })
      .addCase(getPaymentMethodsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Download Invoice
      // ==========================
      .addCase(downloadInvoiceThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(downloadInvoiceThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.message = "Invoice downloaded successfully.";
      })
      .addCase(downloadInvoiceThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearPayment,
  clearPayments,
  clearError,
  clearSuccess,
  resetPaymentState,
} = paymentSlice.actions;

export default paymentSlice.reducer;