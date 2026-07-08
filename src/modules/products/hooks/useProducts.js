import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  deleteProduct,
  clearError,
  clearSuccess,
  selectProducts,
  selectProductLoading,
  selectProductError,
  selectProductSuccess,
} from "../store";

const useProducts = (params = {}) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const success = useSelector(selectProductSuccess);

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [dispatch, params]);

  const removeProduct = (id) => {
    return dispatch(deleteProduct(id));
  };

  const refreshProducts = () => {
    return dispatch(fetchProducts(params));
  };

  const resetError = () => {
    dispatch(clearError());
  };

  const resetSuccess = () => {
    dispatch(clearSuccess());
  };

  return {
    products,
    loading,
    error,
    success,

    refreshProducts,
    removeProduct,
    resetError,
    resetSuccess,
  };
};

export default useProducts;