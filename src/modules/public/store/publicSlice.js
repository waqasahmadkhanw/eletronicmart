import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFeaturedCategories,
  fetchFeaturedProducts,
  fetchNewArrivals,
  fetchTestimonials,
  subscribeNewsletter,
  sendContactMessage,
} from "./publicThunks";

const initialState = {
  featuredCategories: [],
  featuredProducts: [],
  newArrivals: [],
  testimonials: [],

  loading: false,
  error: null,

  newsletterLoading: false,
  newsletterSuccess: false,

  contactLoading: false,
  contactSuccess: false,
};

const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {
    clearNewsletterStatus: (state) => {
      state.newsletterSuccess = false;
    },

    clearContactStatus: (state) => {
      state.contactSuccess = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Featured Categories
      .addCase(fetchFeaturedCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredCategories = action.payload;
      })
      .addCase(fetchFeaturedCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Featured Products
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // New Arrivals
      .addCase(fetchNewArrivals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewArrivals.fulfilled, (state, action) => {
        state.loading = false;
        state.newArrivals = action.payload;
      })
      .addCase(fetchNewArrivals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Testimonials
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Newsletter
      .addCase(subscribeNewsletter.pending, (state) => {
        state.newsletterLoading = true;
        state.newsletterSuccess = false;
      })
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.newsletterLoading = false;
        state.newsletterSuccess = true;
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.newsletterLoading = false;
        state.error = action.payload;
      })

      // Contact
      .addCase(sendContactMessage.pending, (state) => {
        state.contactLoading = true;
        state.contactSuccess = false;
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.contactLoading = false;
        state.contactSuccess = true;
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.contactLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearNewsletterStatus,
  clearContactStatus,
  clearError,
} = publicSlice.actions;

export default publicSlice.reducer;