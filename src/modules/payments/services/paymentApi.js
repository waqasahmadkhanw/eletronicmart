// modules/payments/services/paymentApi.js

import axiosInstance from "../../../config/axios";

/**
 * Get all payments
 */
export const getPaymentsApi = async (params = {}) => {
  const response = await axiosInstance.get("/payments", { params });
  return response.data;
};

/**
 * Get payment by ID
 */
export const getPaymentByIdApi = async (paymentId) => {
  const response = await axiosInstance.get(`/payments/${paymentId}`);
  return response.data;
};

/**
 * Create payment
 */
export const createPaymentApi = async (paymentData) => {
  const response = await axiosInstance.post("/payments", paymentData);
  return response.data;
};

/**
 * Update payment
 */
export const updatePaymentApi = async (paymentId, paymentData) => {
  const response = await axiosInstance.put(
    `/payments/${paymentId}`,
    paymentData
  );

  return response.data;
};

/**
 * Delete payment
 */
export const deletePaymentApi = async (paymentId) => {
  const response = await axiosInstance.delete(`/payments/${paymentId}`);
  return response.data;
};

/**
 * Refund payment
 */
export const refundPaymentApi = async (paymentId, refundData = {}) => {
  const response = await axiosInstance.post(
    `/payments/${paymentId}/refund`,
    refundData
  );

  return response.data;
};

/**
 * Capture authorized payment
 */
export const capturePaymentApi = async (paymentId) => {
  const response = await axiosInstance.post(
    `/payments/${paymentId}/capture`
  );

  return response.data;
};

/**
 * Cancel payment
 */
export const cancelPaymentApi = async (paymentId) => {
  const response = await axiosInstance.post(
    `/payments/${paymentId}/cancel`
  );

  return response.data;
};

/**
 * Verify payment
 */
export const verifyPaymentApi = async (paymentId) => {
  const response = await axiosInstance.get(
    `/payments/${paymentId}/verify`
  );

  return response.data;
};

/**
 * Get available payment methods
 */
export const getPaymentMethodsApi = async () => {
  const response = await axiosInstance.get("/payments/methods");
  return response.data;
};

/**
 * Download payment invoice
 */
export const downloadInvoiceApi = async (paymentId) => {
  const response = await axiosInstance.get(
    `/payments/${paymentId}/invoice`,
    {
      responseType: "blob",
    }
  );

  return response.data;
};