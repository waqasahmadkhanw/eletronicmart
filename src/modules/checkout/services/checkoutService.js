import checkoutApi from "./checkoutApi";

const checkoutService = {
  // Shipping
  async saveShippingAddress(data) {
    const response = await checkoutApi.saveShippingAddress(data);
    return response.data;
  },

  async getShippingAddress() {
    const response = await checkoutApi.getShippingAddress();
    return response.data;
  },

  async updateShippingAddress(id, data) {
    const response = await checkoutApi.updateShippingAddress(id, data);
    return response.data;
  },

  // Payment
  async savePaymentMethod(data) {
    const response = await checkoutApi.savePaymentMethod(data);
    return response.data;
  },

  async getPaymentMethods() {
    const response = await checkoutApi.getPaymentMethods();
    return response.data;
  },

  // Checkout Summary
  async getCheckoutSummary() {
    const response = await checkoutApi.getCheckoutSummary();
    return response.data;
  },

  // Coupon
  async applyCoupon(data) {
    const response = await checkoutApi.applyCoupon(data);
    return response.data;
  },

  async removeCoupon() {
    const response = await checkoutApi.removeCoupon();
    return response.data;
  },

  // Shipping Methods
  async getShippingMethods() {
    const response = await checkoutApi.getShippingMethods();
    return response.data;
  },

  // Place Order
  async placeOrder(data) {
    const response = await checkoutApi.placeOrder(data);
    return response.data;
  },

  // Order Confirmation
  async getOrderConfirmation(orderId) {
    const response = await checkoutApi.getOrderConfirmation(orderId);
    return response.data;
  },
};

export default checkoutService;