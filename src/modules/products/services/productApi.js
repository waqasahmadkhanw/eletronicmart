import api from "../../../config/axios";

// import api from "@/shared/services/api";
// Get all products
export const getProductsApi = (params = {}) => {
  return api.get("/products", { params });
};

// Get single product
export const getProductByIdApi = (id) => {
  return api.get(`/products/${id}`);
};

// Create product
export const createProductApi = (productData) => {
  return api.post("/products", productData);
};

// Update product
export const updateProductApi = (id, productData) => {
  return api.put(`/products/${id}`, productData);
};

// Delete product
export const deleteProductApi = (id) => {
  return api.delete(`/products/${id}`);
};