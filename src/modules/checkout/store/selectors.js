// Basic State
export const selectCheckoutState = (state) => state.checkout;

// Shipping
export const selectShippingAddress = (state) =>
  state.checkout.shippingAddress;

export const selectShippingMethods = (state) =>
  state.checkout.shippingMethods;

// Payment
export const selectPaymentMethods = (state) =>
  state.checkout.paymentMethods;

// Checkout Summary
export const selectCheckoutSummary = (state) =>
  state.checkout.checkoutSummary;

// Coupon
export const selectCoupon = (state) =>
  state.checkout.coupon;

// Order
export const selectOrder = (state) =>
  state.checkout.order;

// Status
export const selectCheckoutLoading = (state) =>
  state.checkout.loading;

export const selectCheckoutSuccess = (state) =>
  state.checkout.success;

export const selectCheckoutError = (state) =>
  state.checkout.error;