import { useDispatch, useSelector } from "react-redux";
import {
  getCheckoutSummary,
  placeOrder,
  applyCoupon,
  removeCoupon,
  getOrderConfirmation,
  selectCheckoutSummary,
  selectOrder,
  selectCoupon,
  selectCheckoutLoading,
  selectCheckoutError,
  selectCheckoutSuccess,
  clearCheckoutError,
  clearCheckoutSuccess,
  resetCheckoutState,
} from "../store";

const useCheckout = () => {
  const dispatch = useDispatch();

  const checkoutSummary = useSelector(selectCheckoutSummary);
  const order = useSelector(selectOrder);
  const coupon = useSelector(selectCoupon);

  const loading = useSelector(selectCheckoutLoading);
  const error = useSelector(selectCheckoutError);
  const success = useSelector(selectCheckoutSuccess);

  const fetchCheckoutSummary = () => {
    return dispatch(getCheckoutSummary());
  };

  const submitOrder = (orderData) => {
    return dispatch(placeOrder(orderData));
  };

  const addCoupon = (couponData) => {
    return dispatch(applyCoupon(couponData));
  };

  const deleteCoupon = () => {
    return dispatch(removeCoupon());
  };

  const fetchOrderConfirmation = (orderId) => {
    return dispatch(getOrderConfirmation(orderId));
  };

  const clearError = () => {
    dispatch(clearCheckoutError());
  };

  const clearSuccess = () => {
    dispatch(clearCheckoutSuccess());
  };

  const resetCheckout = () => {
    dispatch(resetCheckoutState());
  };

  return {
    checkoutSummary,
    order,
    coupon,

    loading,
    error,
    success,

    fetchCheckoutSummary,
    submitOrder,

    addCoupon,
    deleteCoupon,

    fetchOrderConfirmation,

    clearError,
    clearSuccess,
    resetCheckout,
  };
};

export default useCheckout;