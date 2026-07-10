// modules/payments/services/paymentService.js

import {
  getPaymentsApi,
  getPaymentByIdApi,
  createPaymentApi,
  updatePaymentApi,
  deletePaymentApi,
  refundPaymentApi,
  capturePaymentApi,
  cancelPaymentApi,
  verifyPaymentApi,
  getPaymentMethodsApi,
  downloadInvoiceApi,
} from "./paymentApi";

/**
 * Get all payments
 */
export const getPayments = async (params = {}) => {
  return await getPaymentsApi(params);
};

/**
 * Get payment details
 */
export const getPaymentById = async (paymentId) => {
  return await getPaymentByIdApi(paymentId);
};

/**
 * Create payment
 */
export const createPayment = async (paymentData) => {
  return await createPaymentApi(paymentData);
};

/**
 * Update payment
 */
export const updatePayment = async (paymentId, paymentData) => {
  return await updatePaymentApi(paymentId, paymentData);
};

/**
 * Delete payment
 */
export const deletePayment = async (paymentId) => {
  return await deletePaymentApi(paymentId);
};

/**
 * Refund payment
 */
export const refundPayment = async (paymentId, refundData = {}) => {
  return await refundPaymentApi(paymentId, refundData);
};

/**
 * Capture authorized payment
 */
export const capturePayment = async (paymentId) => {
  return await capturePaymentApi(paymentId);
};

/**
 * Cancel payment
 */
export const cancelPayment = async (paymentId) => {
  return await cancelPaymentApi(paymentId);
};

/**
 * Verify payment
 */
export const verifyPayment = async (paymentId) => {
  return await verifyPaymentApi(paymentId);
};

/**
 * Get payment methods
 */
export const getPaymentMethods = async () => {
  return await getPaymentMethodsApi();
};

/**
 * Download invoice
 */
export const downloadInvoice = async (paymentId) => {
  return await downloadInvoiceApi(paymentId);
};