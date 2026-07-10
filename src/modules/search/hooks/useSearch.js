import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchResults,
  selectSearchResults,
  selectSearchLoading,
  selectSearchError,
} from "../store";

const useSearch = (params) => {
  const dispatch = useDispatch();

  const results = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchLoading);
  const error = useSelector(selectSearchError);

  useEffect(() => {
    if (params?.query) {
      dispatch(fetchSearchResults(params));
    }
  }, [dispatch, params]);

  const search = (searchParams) => {
    dispatch(fetchSearchResults(searchParams));
  };

  return {
    results,
    loading,
    error,
    search,
  };
};

export default useSearch;