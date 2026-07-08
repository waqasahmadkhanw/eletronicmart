import {
  getProductsApi,
  getProductByIdApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
} from "./productApi";

// Get all products
export const getProducts = async (params = {}) => {
  const response = await getProductsApi(params);
  return response.data;
};

// Get product by ID
export const getProductById = async (id) => {
  const response = await getProductByIdApi(id);
  return response.data;
};

// Create product
export const createProduct = async (productData) => {
  const response = await createProductApi(productData);
  return response.data;
};

// Update product
export const updateProduct = async (id, productData) => {
  const response = await updateProductApi(id, productData);
  return response.data;
};

// Delete product
export const deleteProduct = async (id) => {
  const response = await deleteProductApi(id);
  return response.data;
};