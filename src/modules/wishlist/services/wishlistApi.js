import api from "@/shared/services/api";

export const getWishlistApi = () => api.get("/wishlist");

export const getWishlistItemApi = (id) => api.get(`/wishlist/${id}`);

export const addToWishlistApi = (data) =>
  api.post("/wishlist", data);

export const removeFromWishlistApi = (id) =>
  api.delete(`/wishlist/${id}`);

export const clearWishlistApi = () =>
  api.delete("/wishlist");

export const moveToCartApi = (id) =>
  api.post(`/wishlist/${id}/move-to-cart`);