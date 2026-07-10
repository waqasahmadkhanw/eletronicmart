import api from "@/shared/services/api";

export const checkoutApi = {
  // Shipping
  saveShippingAddress: (data) =>
    api.post("/checkout/shipping", data),

  getShippingAddress: () =>
    api.get("/checkout/shipping"),

  updateShippingAddress: (id, data) =>
    api.put(`/checkout/shipping/${id}`, data),

  // Payment
  savePaymentMethod: (data) =>
    api.post("/checkout/payment", data),

  getPaymentMethods: () =>
    api.get("/checkout/payment"),

  // Order Review
  getCheckoutSummary: () =>
    api.get("/checkout/summary"),

  // Coupon
  applyCoupon: (data) =>
    api.post("/checkout/coupon", data),

  removeCoupon: () =>
    api.delete("/checkout/coupon"),

  // Shipping Options
  getShippingMethods: () =>
    api.get("/checkout/shipping-methods"),

  // Place Order
  placeOrder: (data) =>
    api.post("/checkout/place-order", data),

  // Order Confirmation
  getOrderConfirmation: (orderId) =>
    api.get(`/checkout/order-confirmation/${orderId}`),
};

export default checkoutApi;