import {
  getOrdersApi,
  getOrderByIdApi,
  createOrderApi,
  updateOrderApi,
  deleteOrderApi,
  updateOrderStatusApi,
  cancelOrderApi,
} from "./orderApi";


// Fetch orders
export const fetchOrdersService = async (params) => {
  const response = await getOrdersApi(params);
  return response.data;
};


// Fetch single order
export const fetchOrderDetailsService = async (orderId) => {
  const response = await getOrderByIdApi(orderId);
  return response.data;
};


// Create new order
export const createOrderService = async (orderData) => {
  const response = await createOrderApi(orderData);
  return response.data;
};


// Update order
export const updateOrderService = async (
  orderId,
  orderData
) => {
  const response = await updateOrderApi(orderId, orderData);
  return response.data;
};


// Delete order
export const deleteOrderService = async (orderId) => {
  const response = await deleteOrderApi(orderId);
  return response.data;
};


// Change order status
export const updateOrderStatusService = async (
  orderId,
  statusData
) => {
  const response = await updateOrderStatusApi(
    orderId,
    statusData
  );

  return response.data;
};


// Cancel order
export const cancelOrderService = async (orderId) => {
  const response = await cancelOrderApi(orderId);
  return response.data;
};