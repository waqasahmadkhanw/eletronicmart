// modules/public/hooks/useFeaturedProducts.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFeaturedProducts,
  selectFeaturedProducts,
  selectLoading,
  selectError,
} from "../store";

const useFeaturedProducts = () => {
  const dispatch = useDispatch();

  const featuredProducts = useSelector(selectFeaturedProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  return {
    featuredProducts,
    loading,
    error,
  };
};

export default useFeaturedProducts;