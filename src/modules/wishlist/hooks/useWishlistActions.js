import { useDispatch } from "react-redux";

import {
  createWishlistItem,
  deleteWishlistItem,
  clearWishlistItems,
  moveWishlistItemToCart,
} from "../store";

const useWishlistActions = () => {
  const dispatch = useDispatch();

  return {
    addToWishlist: (payload) =>
      dispatch(createWishlistItem(payload)),

    removeFromWishlist: (id) =>
      dispatch(deleteWishlistItem(id)),

    clearWishlist: () =>
      dispatch(clearWishlistItems()),

    moveToCart: (id) =>
      dispatch(moveWishlistItemToCart(id)),
  };
};

export default useWishlistActions;