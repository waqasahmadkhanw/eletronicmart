import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchWishlist,
  selectWishlist,
  selectWishlistLoading,
  selectWishlistError,
} from "../store";

const useWishlist = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectWishlist);
  const loading = useSelector(selectWishlistLoading);
  const error = useSelector(selectWishlistError);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return {
    items,
    loading,
    error,
    refreshWishlist: () => dispatch(fetchWishlist()),
  };
};

export default useWishlist;