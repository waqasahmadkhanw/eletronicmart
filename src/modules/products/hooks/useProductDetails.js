import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProductById,
  clearProduct,
  clearError,
  selectProduct,
  selectProductLoading,
  selectProductError,
} from "../store";

const useProductDetails = (productId) => {
  const dispatch = useDispatch();

  const product = useSelector(selectProduct);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, productId]);

  const refreshProduct = () => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  };

  const resetError = () => {
    dispatch(clearError());
  };

  return {
    product,
    loading,
    error,
    refreshProduct,
    resetError,
  };
};

export default useProductDetails;