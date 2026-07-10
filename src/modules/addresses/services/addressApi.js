import api from "../../../shared/services/api";

// Get all addresses
export const getAddressesApi = (params = {}) => {
  return api.get("/addresses", { params });
};

// Get single address
export const getAddressByIdApi = (id) => {
  return api.get(`/addresses/${id}`);
};

// Create address
export const createAddressApi = (data) => {
  return api.post("/addresses", data);
};

// Update address
export const updateAddressApi = (id, data) => {
  return api.put(`/addresses/${id}`, data);
};

// Delete address
export const deleteAddressApi = (id) => {
  return api.delete(`/addresses/${id}`);
};

// Set default address
export const setDefaultAddressApi = (id) => {
  return api.patch(`/addresses/${id}/default`);
};