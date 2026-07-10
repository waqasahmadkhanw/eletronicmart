import { useDispatch, useSelector } from "react-redux";

import {
  fetchSearchSuggestions,
  selectSearchSuggestions,
} from "../store";

const useSearchSuggestions = () => {
  const dispatch = useDispatch();

  const suggestions = useSelector(selectSearchSuggestions);

  const getSuggestions = (query) => {
    if (!query?.trim()) return;

    dispatch(fetchSearchSuggestions(query));
  };

  return {
    suggestions,
    getSuggestions,
  };
};

export default useSearchSuggestions;