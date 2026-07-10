// modules/payments/hooks/usePaymentActions.js

import { useDispatch, useSelector } from "react-redux";

import {
  createPaymentThunk,
  updatePaymentThunk,
  deletePaymentThunk,
  refundPaymentThunk,
  capturePaymentThunk,
  cancelPaymentThunk,
  verifyPaymentThunk,
  downloadInvoiceThunk,
  clearError,
  clearSuccess,
  resetPaymentState,
  selectPaymentLoading,
  selectPaymentError,
  selectPaymentSuccess,
  selectPaymentMessage,
} from "../store";

const usePaymentActions = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectPaymentLoading);
  const error = useSelector(selectPaymentError);
  const success = useSelector(selectPaymentSuccess);
  const message = useSelector(selectPaymentMessage);

  const createPayment = (paymentData) =>
    dispatch(createPaymentThunk(paymentData));

  const updatePayment = (paymentId, paymentData) =>
    dispatch(updatePaymentThunk({ paymentId, paymentData }));

  const deletePayment = (paymentId) =>
    dispatch(deletePaymentThunk(paymentId));

  const refundPayment = (paymentId, refundData = {}) =>
    dispatch(refundPaymentThunk({ paymentId, refundData }));

  const capturePayment = (paymentId) =>
    dispatch(capturePaymentThunk(paymentId));

  const cancelPayment = (paymentId) =>
    dispatch(cancelPaymentThunk(paymentId));

  const verifyPayment = (paymentId) =>
    dispatch(verifyPaymentThunk(paymentId));

  const downloadInvoice = (paymentId) =>
    dispatch(downloadInvoiceThunk(paymentId));

  const clearErrors = () => dispatch(clearError());

  const clearSuccessState = () => dispatch(clearSuccess());

  const resetState = () => dispatch(resetPaymentState());

  return {
    loading,
    error,
    success,
    message,

    createPayment,
    updatePayment,
    deletePayment,
    refundPayment,
    capturePayment,
    cancelPayment,
    verifyPayment,
    downloadInvoice,

    clearErrors,
    clearSuccessState,
    resetState,
  };
};

export default usePaymentActions;