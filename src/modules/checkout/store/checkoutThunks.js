import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkoutService } from "../services";

// Shipping
export const saveShippingAddress = createAsyncThunk(
  "checkout/saveShippingAddress",
  async (shippingData, thunkAPI) => {
    try {
      return await checkoutService.saveShippingAddress(shippingData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to save shipping address."
      );
    }
  }
);

export const getShippingAddress = createAsyncThunk(
  "checkout/getShippingAddress",
  async (_, thunkAPI) => {
    try {
      return await checkoutService.getShippingAddress();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch shipping address."
      );
    }
  }
);

export const updateShippingAddress = createAsyncThunk(
  "checkout/updateShippingAddress",
  async ({ id, data }, thunkAPI) => {
    try {
      return await checkoutService.updateShippingAddress(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update shipping address."
      );
    }
  }
);

// Payment
export const savePaymentMethod = createAsyncThunk(
  "checkout/savePaymentMethod",
  async (paymentData, thunkAPI) => {
    try {
      return await checkoutService.savePaymentMethod(paymentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to save payment method."
      );
    }
  }
);

export const getPaymentMethods = createAsyncThunk(
  "checkout/getPaymentMethods",
  async (_, thunkAPI) => {
    try {
      return await checkoutService.getPaymentMethods();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch payment methods."
      );
    }
  }
);

// Checkout Summary
export const getCheckoutSummary = createAsyncThunk(
  "checkout/getCheckoutSummary",
  async (_, thunkAPI) => {
    try {
      return await checkoutService.getCheckoutSummary();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch checkout summary."
      );
    }
  }
);

// Coupon
export const applyCoupon = createAsyncThunk(
  "checkout/applyCoupon",
  async (couponData, thunkAPI) => {
    try {
      return await checkoutService.applyCoupon(couponData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to apply coupon."
      );
    }
  }
);

export const removeCoupon = createAsyncThunk(
  "checkout/removeCoupon",
  async (_, thunkAPI) => {
    try {
      return await checkoutService.removeCoupon();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to remove coupon."
      );
    }
  }
);

// Shipping Methods
export const getShippingMethods = createAsyncThunk(
  "checkout/getShippingMethods",
  async (_, thunkAPI) => {
    try {
      return await checkoutService.getShippingMethods();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch shipping methods."
      );
    }
  }
);

// Place Order
export const placeOrder = createAsyncThunk(
  "checkout/placeOrder",
  async (orderData, thunkAPI) => {
    try {
      return await checkoutService.placeOrder(orderData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to place order."
      );
    }
  }
);

// Order Confirmation
export const getOrderConfirmation = createAsyncThunk(
  "checkout/getOrderConfirmation",
  async (orderId, thunkAPI) => {
    try {
      return await checkoutService.getOrderConfirmation(orderId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch order confirmation."
      );
    }
  }
);