import {
  getUsersApi,
  getUserByIdApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
} from "./userApi";

export const getUsers = async (params) => {
  const response = await getUsersApi(params);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await getUserByIdApi(id);
  return response.data;
};

export const createUser = async (data) => {
  const response = await createUserApi(data);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await updateUserApi(id, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await deleteUserApi(id);
  return response.data;
};