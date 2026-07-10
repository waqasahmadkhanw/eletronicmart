import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../services";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (params, thunkAPI) => {
    try {
      return await getReviews(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const fetchReviewById = createAsyncThunk(
  "reviews/fetchReviewById",
  async (reviewId, thunkAPI) => {
    try {
      return await getReviewById(reviewId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (reviewData, thunkAPI) => {
    try {
      return await createReview(reviewData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const editReview = createAsyncThunk(
  "reviews/editReview",
  async ({ reviewId, reviewData }, thunkAPI) => {
    try {
      return await updateReview(reviewId, reviewData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const removeReview = createAsyncThunk(
  "reviews/removeReview",
  async (reviewId, thunkAPI) => {
    try {
      return await deleteReview(reviewId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);