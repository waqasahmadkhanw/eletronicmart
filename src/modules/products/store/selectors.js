// Root selector
export const selectProductState = (state) => state.products;

// Products
export const selectProducts = (state) =>
  state.products.products;

// Single Product
export const selectProduct = (state) =>
  state.products.product;

// Loading
export const selectProductLoading = (state) =>
  state.products.loading;

// Error
export const selectProductError = (state) =>
  state.products.error;

// Success
export const selectProductSuccess = (state) =>
  state.products.success;