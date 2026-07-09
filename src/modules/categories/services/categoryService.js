import {
  getCategoriesApi,
  getCategoryByIdApi,
  createCategoryApi,
  updateCategoryApi,
  deleteCategoryApi,
  updateCategoryStatusApi,
} from "./categoryApi";

// Get all categories
export const getCategories = async (params = {}) => {
  const response = await getCategoriesApi(params);
  return response.data;
};

// Get category details
export const getCategoryById = async (categoryId) => {
  const response = await getCategoryByIdApi(categoryId);
  return response.data;
};

// Create category
export const createCategory = async (categoryData) => {
  const response = await createCategoryApi(categoryData);
  return response.data;
};

// Update category
export const updateCategory = async (categoryId, categoryData) => {
  const response = await updateCategoryApi(categoryId, categoryData);
  return response.data;
};

// Delete category
export const deleteCategory = async (categoryId) => {
  const response = await deleteCategoryApi(categoryId);
  return response.data;
};

// Update category status
export const updateCategoryStatus = async (categoryId, status) => {
  const response = await updateCategoryStatusApi(categoryId, status);
  return response.data;
};