import api from "@/shared/services/api";

export const getCartApi = () => api.get("/cart");

export const addToCartApi = (payload) =>
  api.post("/cart", payload);

export const updateCartItemApi = (itemId, payload) =>
  api.patch(`/cart/${itemId}`, payload);

export const removeCartItemApi = (itemId) =>
  api.delete(`/cart/${itemId}`);

export const clearCartApi = () =>
  api.delete("/cart");

export const applyCouponApi = (payload) =>
  api.post("/cart/coupon", payload);

export const removeCouponApi = () =>
  api.delete("/cart/coupon");

export const moveToWishlistApi = (itemId) =>
  api.post(`/cart/${itemId}/wishlist`);

export const getSavedItemsApi = () =>
  api.get("/cart/saved-items");

export const moveSavedItemToCartApi = (itemId) =>
  api.post(`/cart/saved-items/${itemId}`);

export const removeSavedItemApi = (itemId) =>
  api.delete(`/cart/saved-items/${itemId}`);