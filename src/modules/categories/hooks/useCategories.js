import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchCategories,
  selectCategories,
  selectCategoryLoading,
  selectCategoryError,
} from "../store";

const useCategories = (params = {}) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const loading = useSelector(selectCategoryLoading);
  const error = useSelector(selectCategoryError);

  useEffect(() => {
    dispatch(fetchCategories(params));
  }, [dispatch, JSON.stringify(params)]);

  const refetchCategories = () => {
    dispatch(fetchCategories(params));
  };

  return {
    categories,
    loading,
    error,
    refetchCategories,
  };
};

export default useCategories;