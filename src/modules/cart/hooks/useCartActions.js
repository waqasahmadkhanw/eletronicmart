import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  updateItemQuantity,
  deleteCartItem,
  clearUserCart,
  applyCartCoupon,
  removeCartCoupon,
  fetchSavedItems,
  restoreSavedItem,
  deleteSavedItem,
  saveForLater,
  selectCartLoading,
} from "../store";

const useCartActions = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectCartLoading);

  return {
    loading,

    addItem: (payload) =>
      dispatch(addItemToCart(payload)),

    updateQuantity: (itemId, payload) =>
      dispatch(updateItemQuantity({ itemId, payload })),

    removeItem: (itemId) =>
      dispatch(deleteCartItem(itemId)),

    clearCart: () =>
      dispatch(clearUserCart()),

    applyCoupon: (payload) =>
      dispatch(applyCartCoupon(payload)),

    removeCoupon: () =>
      dispatch(removeCartCoupon()),

    getSavedItems: () =>
      dispatch(fetchSavedItems()),

    restoreItem: (itemId) =>
      dispatch(restoreSavedItem(itemId)),

    removeSavedItem: (itemId) =>
      dispatch(deleteSavedItem(itemId)),

    moveToWishlist: (itemId) =>
      dispatch(saveForLater(itemId)),
  };
};

export default useCartActions;