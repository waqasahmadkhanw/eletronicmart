import api from "@/shared/services/api";

export const searchProductsApi = async (params) => {
  const { data } = await api.get("/search", { params });
  return data;
};

export const getSearchSuggestionsApi = async (query) => {
  const { data } = await api.get("/search/suggestions", {
    params: { query },
  });
  return data;
};

export const getSearchHistoryApi = async () => {
  const { data } = await api.get("/search/history");
  return data;
};

export const clearSearchHistoryApi = async () => {
  const { data } = await api.delete("/search/history");
  return data;
};