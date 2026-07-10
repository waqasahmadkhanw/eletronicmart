import api from "@/config/axios";

const ORDER_ENDPOINT = "/orders";

// Get all orders
export const getOrdersApi = (params) => {
  return api.get(ORDER_ENDPOINT, { params });
};

// Get single order details
export const getOrderByIdApi = (orderId) => {
  return api.get(`${ORDER_ENDPOINT}/${orderId}`);
};

// Create order
export const createOrderApi = (orderData) => {
  return api.post(ORDER_ENDPOINT, orderData);
};

// Update order
export const updateOrderApi = (orderId, orderData) => {
  return api.patch(`${ORDER_ENDPOINT}/${orderId}`, orderData);
};

// Delete order
export const deleteOrderApi = (orderId) => {
  return api.delete(`${ORDER_ENDPOINT}/${orderId}`);
};

// Update order status
export const updateOrderStatusApi = (orderId, statusData) => {
  return api.patch(
    `${ORDER_ENDPOINT}/${orderId}/status`,
    statusData
  );
};

// Cancel order
export const cancelOrderApi = (orderId) => {
  return api.patch(`${ORDER_ENDPOINT}/${orderId}/cancel`);
};