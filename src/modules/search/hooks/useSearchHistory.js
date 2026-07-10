import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchHistory,
  removeSearchHistory,
  selectSearchHistory,
} from "../store";

const useSearchHistory = () => {
  const dispatch = useDispatch();

  const history = useSelector(selectSearchHistory);

  useEffect(() => {
    dispatch(fetchSearchHistory());
  }, [dispatch]);

  const clearHistory = () => {
    dispatch(removeSearchHistory());
  };

  return {
    history,
    clearHistory,
  };
};

export default useSearchHistory;