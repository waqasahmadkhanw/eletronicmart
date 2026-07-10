import { useDispatch, useSelector } from "react-redux";

import {
  fetchWishlistItem,
  selectWishlistItem,
} from "../store";

const useWishlistItems = () => {
  const dispatch = useDispatch();

  const selectedItem = useSelector(selectWishlistItem);

  const getWishlistItem = (id) =>
    dispatch(fetchWishlistItem(id));

  return {
    selectedItem,
    getWishlistItem,
  };
};

export default useWishlistItems;