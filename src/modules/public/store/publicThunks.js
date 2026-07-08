import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchHomeData,
  fetchFeaturedProducts,
  fetchCategories,
  fetchDeals,
  fetchBrands,
  fetchTestimonials,
  fetchBlogs,
  fetchBlogDetails,
  contactUs,
  subscribeToNewsletter,
} from "../services";

// Home
export const getHomeData = createAsyncThunk(
  "public/getHomeData",
  async (_, thunkAPI) => {
    try {
      return await fetchHomeData();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Featured Products
export const getFeaturedProducts = createAsyncThunk(
  "public/getFeaturedProducts",
  async (_, thunkAPI) => {
    try {
      return await fetchFeaturedProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Categories
export const getCategories = createAsyncThunk(
  "public/getCategories",
  async (_, thunkAPI) => {
    try {
      return await fetchCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Deals
export const getDeals = createAsyncThunk(
  "public/getDeals",
  async (_, thunkAPI) => {
    try {
      return await fetchDeals();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Brands
export const getBrands = createAsyncThunk(
  "public/getBrands",
  async (_, thunkAPI) => {
    try {
      return await fetchBrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Testimonials
export const getTestimonials = createAsyncThunk(
  "public/getTestimonials",
  async (_, thunkAPI) => {
    try {
      return await fetchTestimonials();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Blogs
export const getBlogs = createAsyncThunk(
  "public/getBlogs",
  async (_, thunkAPI) => {
    try {
      return await fetchBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Blog Details
export const getBlogDetails = createAsyncThunk(
  "public/getBlogDetails",
  async (slug, thunkAPI) => {
    try {
      return await fetchBlogDetails(slug);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Contact
export const submitContactForm = createAsyncThunk(
  "public/submitContactForm",
  async (payload, thunkAPI) => {
    try {
      return await contactUs(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

// Newsletter
export const subscribeNewsletter = createAsyncThunk(
  "public/subscribeNewsletter",
  async (payload, thunkAPI) => {
    try {
      return await subscribeToNewsletter(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);