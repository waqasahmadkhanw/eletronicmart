import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchOrdersService,
  fetchOrderDetailsService,
  createOrderService,
  updateOrderService,
  deleteOrderService,
  updateOrderStatusService,
  cancelOrderService,
} from "../services";

// Get all orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (params, thunkAPI) => {
    try {
      return await fetchOrdersService(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Get order details
export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (orderId, thunkAPI) => {
    try {
      return await fetchOrderDetailsService(orderId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Create order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, thunkAPI) => {
    try {
      return await createOrderService(orderData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Update order
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, orderData }, thunkAPI) => {
    try {
      return await updateOrderService(orderId, orderData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Delete order
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId, thunkAPI) => {
    try {
      return await deleteOrderService(orderId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Update order status
export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ orderId, statusData }, thunkAPI) => {
    try {
      return await updateOrderStatusService(orderId, statusData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Cancel order
export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async (orderId, thunkAPI) => {
    try {
      return await cancelOrderService(orderId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);