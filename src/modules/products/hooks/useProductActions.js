import { useDispatch, useSelector } from "react-redux";

import {
  createProduct,
  updateProduct,
  deleteProduct,
  clearError,
  clearSuccess,
  selectProductLoading,
  selectProductError,
  selectProductSuccess,
} from "../store";

const useProductActions = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const success = useSelector(selectProductSuccess);

  // Create Product
  const addProduct = async (productData) => {
    return await dispatch(createProduct(productData));
  };

  // Update Product
  const editProduct = async (id, productData) => {
    return await dispatch(updateProduct({ id, productData }));
  };

  // Delete Product
  const removeProduct = async (id) => {
    return await dispatch(deleteProduct(id));
  };

  // Clear Error
  const resetError = () => {
    dispatch(clearError());
  };

  // Clear Success
  const resetSuccess = () => {
    dispatch(clearSuccess());
  };

  return {
    loading,
    error,
    success,

    addProduct,
    editProduct,
    removeProduct,

    resetError,
    resetSuccess,
  };
};

export default useProductActions;