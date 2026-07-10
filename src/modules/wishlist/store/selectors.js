export const selectWishlist = (state) => state.wishlist.items;

export const selectWishlistItem = (state) =>
  state.wishlist.selectedItem;

export const selectWishlistLoading = (state) =>
  state.wishlist.loading;

export const selectWishlistError = (state) =>
  state.wishlist.error;

export const selectWishlistCount = (state) =>
  state.wishlist.items.length;