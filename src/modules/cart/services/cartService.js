import * as cartApi from "./cartApi";

export const getCart = async () => {
  const { data } = await cartApi.getCartApi();
  return data;
};

export const addToCart = async (payload) => {
  const { data } = await cartApi.addToCartApi(payload);
  return data;
};

export const updateCartItem = async (itemId, payload) => {
  const { data } = await cartApi.updateCartItemApi(itemId, payload);
  return data;
};

export const removeCartItem = async (itemId) => {
  const { data } = await cartApi.removeCartItemApi(itemId);
  return data;
};

export const clearCart = async () => {
  const { data } = await cartApi.clearCartApi();
  return data;
};

export const applyCoupon = async (payload) => {
  const { data } = await cartApi.applyCouponApi(payload);
  return data;
};

export const removeCoupon = async () => {
  const { data } = await cartApi.removeCouponApi();
  return data;
};

export const moveToWishlist = async (itemId) => {
  const { data } = await cartApi.moveToWishlistApi(itemId);
  return data;
};

export const getSavedItems = async () => {
  const { data } = await cartApi.getSavedItemsApi();
  return data;
};

export const moveSavedItemToCart = async (itemId) => {
  const { data } = await cartApi.moveSavedItemToCartApi(itemId);
  return data;
};

export const removeSavedItem = async (itemId) => {
  const { data } = await cartApi.removeSavedItemApi(itemId);
  return data;
};