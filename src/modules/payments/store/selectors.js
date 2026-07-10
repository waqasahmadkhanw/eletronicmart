// modules/payments/store/selectors.js

/**
 * Root Selector
 */
export const selectPaymentState = (state) => state.payments;

/**
 * Payments
 */
export const selectPayments = (state) => state.payments.payments;

/**
 * Single Payment
 */
export const selectPayment = (state) => state.payments.payment;

/**
 * Payment Methods
 */
export const selectPaymentMethods = (state) =>
  state.payments.paymentMethods;

/**
 * Loading
 */
export const selectPaymentLoading = (state) =>
  state.payments.loading;

/**
 * Success
 */
export const selectPaymentSuccess = (state) =>
  state.payments.success;

/**
 * Error
 */
export const selectPaymentError = (state) =>
  state.payments.error;

/**
 * Message
 */
export const selectPaymentMessage = (state) =>
  state.payments.message;