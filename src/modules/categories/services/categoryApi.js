import api from "../../../shared/services/api";

// Get all categories
export const getCategoriesApi = (params = {}) => {
  return api.get("/categories", { params });
};

// Get category by ID
export const getCategoryByIdApi = (categoryId) => {
  return api.get(`/categories/${categoryId}`);
};

// Create category
export const createCategoryApi = (categoryData) => {
  return api.post("/categories", categoryData);
};

// Update category
export const updateCategoryApi = (categoryId, categoryData) => {
  return api.put(`/categories/${categoryId}`, categoryData);
};

// Delete category
export const deleteCategoryApi = (categoryId) => {
  return api.delete(`/categories/${categoryId}`);
};

// Update category status (active/inactive)
export const updateCategoryStatusApi = (categoryId, status) => {
  return api.patch(`/categories/${categoryId}/status`, {
    status,
  });
};