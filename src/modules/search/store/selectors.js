export const selectSearchResults = (state) => state.search.results;

export const selectSearchSuggestions = (state) =>
  state.search.suggestions;

export const selectSearchHistory = (state) =>
  state.search.history;

export const selectSearchLoading = (state) =>
  state.search.loading;

export const selectSearchError = (state) =>
  state.search.error;