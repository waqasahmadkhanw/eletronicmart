// Thunks
export {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productThunks";

// Reducer
export { default as productReducer } from "./productSlice";

// Actions
export {
  clearProduct,
  clearProducts,
  clearError,
  clearSuccess,
} from "./productSlice";

// Selectors
export {
  selectProductState,
  selectProducts,
  selectProduct,
  selectProductLoading,
  selectProductError,
  selectProductSuccess,
} from "./selectors";