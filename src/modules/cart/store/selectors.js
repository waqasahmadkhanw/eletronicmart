export const selectCart = (state) => state.cart.cart;

export const selectSavedItems = (state) => state.cart.savedItems;

export const selectCartLoading = (state) => state.cart.loading;

export const selectCartError = (state) => state.cart.error;

export const selectCartItems = (state) =>
  state.cart.cart?.items || [];

export const selectCartTotals = (state) =>
  state.cart.cart?.totals || {};

export const selectCartItemCount = (state) =>
  state.cart.cart?.items?.length || 0;