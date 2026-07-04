// modules/public/hooks/useHome.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFeaturedCategories,
  fetchFeaturedProducts,
  fetchNewArrivals,
  fetchTestimonials,
} from "../store";

import {
  selectFeaturedCategories,
  selectFeaturedProducts,
  selectNewArrivals,
  selectTestimonials,
  selectLoading,
  selectError,
} from "../store";

const useHome = () => {
  const dispatch = useDispatch();

  const featuredCategories = useSelector(selectFeaturedCategories);
  const featuredProducts = useSelector(selectFeaturedProducts);
  const newArrivals = useSelector(selectNewArrivals);
  const testimonials = useSelector(selectTestimonials);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFeaturedCategories());
    dispatch(fetchFeaturedProducts());
    dispatch(fetchNewArrivals());
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return {
    featuredCategories,
    featuredProducts,
    newArrivals,
    testimonials,
    loading,
    error,
  };
};

export default useHome;