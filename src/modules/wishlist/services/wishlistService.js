import {
  getWishlistApi,
  getWishlistItemApi,
  addToWishlistApi,
  removeFromWishlistApi,
  clearWishlistApi,
  moveToCartApi,
} from "./wishlistApi";

export const getWishlist = async () => {
  const { data } = await getWishlistApi();
  return data;
};

export const getWishlistItem = async (id) => {
  const { data } = await getWishlistItemApi(id);
  return data;
};

export const addToWishlist = async (payload) => {
  const { data } = await addToWishlistApi(payload);
  return data;
};

export const removeFromWishlist = async (id) => {
  const { data } = await removeFromWishlistApi(id);
  return data;
};

export const clearWishlist = async () => {
  const { data } = await clearWishlistApi();
  return data;
};

export const moveToCart = async (id) => {
  const { data } = await moveToCartApi(id);
  return data;
};