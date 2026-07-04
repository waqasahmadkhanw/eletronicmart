import { createAsyncThunk } from "@reduxjs/toolkit";
import * as publicService from "../services/publicService";

// Featured Categories
export const fetchFeaturedCategories = createAsyncThunk(
  "public/fetchFeaturedCategories",
  async (_, { rejectWithValue }) => {
    try {
      return await publicService.getFeaturedCategories();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Featured Products
export const fetchFeaturedProducts = createAsyncThunk(
  "public/fetchFeaturedProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await publicService.getFeaturedProducts();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// New Arrivals
export const fetchNewArrivals = createAsyncThunk(
  "public/fetchNewArrivals",
  async (_, { rejectWithValue }) => {
    try {
      return await publicService.getNewArrivals();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Testimonials
export const fetchTestimonials = createAsyncThunk(
  "public/fetchTestimonials",
  async (_, { rejectWithValue }) => {
    try {
      return await publicService.getTestimonials();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Newsletter
export const subscribeNewsletter = createAsyncThunk(
  "public/subscribeNewsletter",
  async (data, { rejectWithValue }) => {
    try {
      return await publicService.subscribeNewsletter(data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Contact
export const sendContactMessage = createAsyncThunk(
  "public/sendContactMessage",
  async (data, { rejectWithValue }) => {
    try {
      return await publicService.sendContactMessage(data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);