import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReviews,
  fetchReviewById,
  addReview,
  editReview,
  removeReview,
} from "./reviewThunks";

const initialState = {
  reviews: [],
  review: null,
  loading: false,
 error: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clearReview(state) {
      state.review = null;
    },
    clearReviewError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Reviews
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Review By Id
      .addCase(fetchReviewById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviewById.fulfilled, (state, action) => {
        state.loading = false;
        state.review = action.payload;
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Review
      .addCase(addReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews.unshift(action.payload);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Review
      .addCase(editReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = state.reviews.map((review) =>
          review._id === action.payload._id ? action.payload : review
        );
        state.review = action.payload;
      })

      // Delete Review
      .addCase(removeReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.meta.arg
        );
      });
  },
});

export const { clearReview, clearReviewError } = reviewSlice.actions;

export default reviewSlice.reducer;