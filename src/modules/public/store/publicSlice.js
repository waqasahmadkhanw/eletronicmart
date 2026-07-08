import { createSlice } from "@reduxjs/toolkit";

import {
  getHomeData,
  getFeaturedProducts,
  getCategories,
  getDeals,
  getBrands,
  getTestimonials,
  getBlogs,
  getBlogDetails,
  submitContactForm,
  subscribeNewsletter,
} from "./publicThunks";

const initialState = {
  homeData: null,
  featuredProducts: [],
  categories: [],
  deals: [],
  brands: [],
  testimonials: [],
  blogs: [],
  blogDetails: null,

  loading: false,
  success: false,
  error: null,
};

const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    clearSuccess: (state) => {
      state.success = false;
    },

    clearBlogDetails: (state) => {
      state.blogDetails = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addMatcher(
        (action) => action.type.startsWith("public/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        }
      )

      // Rejected
      .addMatcher(
        (action) => action.type.startsWith("public/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload || action.error.message;
        }
      )

      // Home
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.homeData = action.payload;
      })

      // Featured Products
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload;
      })

      // Categories
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })

      // Deals
      .addCase(getDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })

      // Brands
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })

      // Testimonials
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })

      // Blogs
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })

      // Blog Details
      .addCase(getBlogDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetails = action.payload;
      })

      // Contact Form
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      // Newsletter
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      });
  },
});

export const {
  clearError,
  clearSuccess,
  clearBlogDetails,
} = publicSlice.actions;

export default publicSlice.reducer;