import {
  getAddressesApi,
  getAddressByIdApi,
  createAddressApi,
  updateAddressApi,
  deleteAddressApi,
  setDefaultAddressApi,
} from "./addressApi";

export const getAddresses = async (params = {}) => {
  const { data } = await getAddressesApi(params);
  return data;
};

export const getAddressById = async (id) => {
  const { data } = await getAddressByIdApi(id);
  return data;
};

export const createAddress = async (payload) => {
  const { data } = await createAddressApi(payload);
  return data;
};

export const updateAddress = async (id, payload) => {
  const { data } = await updateAddressApi(id, payload);
  return data;
};

export const deleteAddress = async (id) => {
  const { data } = await deleteAddressApi(id);
  return data;
};

export const setDefaultAddress = async (id) => {
  const { data } = await setDefaultAddressApi(id);
  return data;
};