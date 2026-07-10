import {
  searchProductsApi,
  getSearchSuggestionsApi,
  getSearchHistoryApi,
  clearSearchHistoryApi,
} from "./searchApi";

export const searchProducts = async (params) => {
  return await searchProductsApi(params);
};

export const getSearchSuggestions = async (query) => {
  return await getSearchSuggestionsApi(query);
};

export const getSearchHistory = async () => {
  return await getSearchHistoryApi();
};

export const clearSearchHistory = async () => {
  return await clearSearchHistoryApi();
};