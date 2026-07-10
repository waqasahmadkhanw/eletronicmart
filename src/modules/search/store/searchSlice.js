import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSearchResults,
  fetchSearchSuggestions,
  fetchSearchHistory,
  removeSearchHistory,
} from "./searchThunks";

const initialState = {
  results: [],
  suggestions: [],
  history: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.results = [];
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })

      .addCase(fetchSearchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      })

      .addCase(removeSearchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      });
  },
});

export const { clearSearchResults, clearSuggestions } = searchSlice.actions;

export default searchSlice.reducer;