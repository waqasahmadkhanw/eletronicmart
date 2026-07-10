// modules/payments/store/paymentThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
  refundPayment,
  capturePayment,
  cancelPayment,
  verifyPayment,
  getPaymentMethods,
  downloadInvoice,
} from "../services";

/**
 * Get All Payments
 */
export const getPaymentsThunk = createAsyncThunk(
  "payments/getPayments",
  async (params = {}, { rejectWithValue }) => {
    try {
      return await getPayments(params);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to fetch payments."
      );
    }
  }
);

/**
 * Get Payment By ID
 */
export const getPaymentByIdThunk = createAsyncThunk(
  "payments/getPaymentById",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await getPaymentById(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to fetch payment."
      );
    }
  }
);

/**
 * Create Payment
 */
export const createPaymentThunk = createAsyncThunk(
  "payments/createPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      return await createPayment(paymentData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to create payment."
      );
    }
  }
);

/**
 * Update Payment
 */
export const updatePaymentThunk = createAsyncThunk(
  "payments/updatePayment",
  async ({ paymentId, paymentData }, { rejectWithValue }) => {
    try {
      return await updatePayment(paymentId, paymentData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to update payment."
      );
    }
  }
);

/**
 * Delete Payment
 */
export const deletePaymentThunk = createAsyncThunk(
  "payments/deletePayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await deletePayment(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to delete payment."
      );
    }
  }
);

/**
 * Refund Payment
 */
export const refundPaymentThunk = createAsyncThunk(
  "payments/refundPayment",
  async ({ paymentId, refundData }, { rejectWithValue }) => {
    try {
      return await refundPayment(paymentId, refundData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to refund payment."
      );
    }
  }
);

/**
 * Capture Payment
 */
export const capturePaymentThunk = createAsyncThunk(
  "payments/capturePayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await capturePayment(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to capture payment."
      );
    }
  }
);

/**
 * Cancel Payment
 */
export const cancelPaymentThunk = createAsyncThunk(
  "payments/cancelPayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await cancelPayment(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to cancel payment."
      );
    }
  }
);

/**
 * Verify Payment
 */
export const verifyPaymentThunk = createAsyncThunk(
  "payments/verifyPayment",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await verifyPayment(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to verify payment."
      );
    }
  }
);

/**
 * Get Payment Methods
 */
export const getPaymentMethodsThunk = createAsyncThunk(
  "payments/getPaymentMethods",
  async (_, { rejectWithValue }) => {
    try {
      return await getPaymentMethods();
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          error.message ||
          "Failed to fetch payment methods."
      );
    }
  }
);

/**
 * Download Invoice
 */
export const downloadInvoiceThunk = createAsyncThunk(
  "payments/downloadInvoice",
  async (paymentId, { rejectWithValue }) => {
    try {
      return await downloadInvoice(paymentId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          error.message ||
          "Failed to download invoice."
      );
    }
  }
);