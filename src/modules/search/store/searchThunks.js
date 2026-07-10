import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  searchProducts,
  getSearchSuggestions,
  getSearchHistory,
  clearSearchHistory,
} from "../services";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (params, { rejectWithValue }) => {
    try {
      return await searchProducts(params);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch search results."
      );
    }
  }
);

export const fetchSearchSuggestions = createAsyncThunk(
  "search/fetchSearchSuggestions",
  async (query, { rejectWithValue }) => {
    try {
      return await getSearchSuggestions(query);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch suggestions."
      );
    }
  }
);

export const fetchSearchHistory = createAsyncThunk(
  "search/fetchSearchHistory",
  async (_, { rejectWithValue }) => {
    try {
      return await getSearchHistory();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch search history."
      );
    }
  }
);

export const removeSearchHistory = createAsyncThunk(
  "search/removeSearchHistory",
  async (_, { rejectWithValue }) => {
    try {
      await clearSearchHistory();
      return [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to clear search history."
      );
    }
  }
);