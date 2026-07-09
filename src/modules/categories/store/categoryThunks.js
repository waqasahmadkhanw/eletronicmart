import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  updateCategoryStatus,
} from "../services";

// Get all categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (params = {}, { rejectWithValue }) => {
    try {
      return await getCategories(params);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

// Get category details
export const fetchCategoryById = createAsyncThunk(
  "categories/fetchCategoryById",
  async (categoryId, { rejectWithValue }) => {
    try {
      return await getCategoryById(categoryId);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch category"
      );
    }
  }
);

// Create category
export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      return await createCategory(categoryData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create category"
      );
    }
  }
);

// Update category
export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async ({ categoryId, categoryData }, { rejectWithValue }) => {
    try {
      return await updateCategory(categoryId, categoryData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update category"
      );
    }
  }
);

// Delete category
export const removeCategory = createAsyncThunk(
  "categories/removeCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      await deleteCategory(categoryId);
      return categoryId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete category"
      );
    }
  }
);

// Update category status
export const changeCategoryStatus = createAsyncThunk(
  "categories/changeCategoryStatus",
  async ({ categoryId, status }, { rejectWithValue }) => {
    try {
      return await updateCategoryStatus(categoryId, status);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update category status"
      );
    }
  }
);