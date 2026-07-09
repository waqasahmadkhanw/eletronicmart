import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCategories,
  fetchCategoryById,
  addCategory,
  editCategory,
  removeCategory,
  changeCategoryStatus,
} from "./categoryThunks";

const initialState = {
  categories: [],
  category: null,

  loading: false,
  error: null,

  total: 0,
};

const categorySlice = createSlice({
  name: "categories",

  initialState,

  reducers: {
    clearCategory: (state) => {
      state.category = null;
    },

    clearCategoryError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;

        state.categories =
          action.payload.data || action.payload.categories || [];

        state.total =
          action.payload.total || state.categories.length;
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // Fetch Category Details
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;

        state.category =
          action.payload.data || action.payload;
      })

      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // Create Category
      .addCase(addCategory.fulfilled, (state, action) => {
        const newCategory =
          action.payload.data || action.payload;

        state.categories.push(newCategory);
      })


      // Update Category
      .addCase(editCategory.fulfilled, (state, action) => {
        const updatedCategory =
          action.payload.data || action.payload;

        const index = state.categories.findIndex(
          (item) => item._id === updatedCategory._id
        );

        if (index !== -1) {
          state.categories[index] = updatedCategory;
        }

        state.category = updatedCategory;
      })


      // Delete Category
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (item) => item._id !== action.payload
        );
      })


      // Update Status
      .addCase(changeCategoryStatus.fulfilled, (state, action) => {
        const updatedCategory =
          action.payload.data || action.payload;

        const index = state.categories.findIndex(
          (item) => item._id === updatedCategory._id
        );

        if (index !== -1) {
          state.categories[index] = updatedCategory;
        }
      });
  },
});

export const {
  clearCategory,
  clearCategoryError,
} = categorySlice.actions;

export default categorySlice.reducer;