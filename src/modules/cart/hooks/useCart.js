import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCart,
  selectCart,
  selectCartLoading,
  selectCartError,
  selectCartTotals,
  selectCartItemCount,
} from "../store";

const useCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);
  const totals = useSelector(selectCartTotals);
  const itemCount = useSelector(selectCartItemCount);
  const loading = useSelector(selectCartLoading);
  const error = useSelector(selectCartError);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return {
    cart,
    totals,
    itemCount,
    loading,
    error,
    refreshCart: () => dispatch(fetchCart()),
  };
};

export default useCart;