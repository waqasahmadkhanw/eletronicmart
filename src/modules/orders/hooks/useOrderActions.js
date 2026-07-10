import { useDispatch } from "react-redux";

import {
  createOrder,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  cancelOrder,
} from "../store";

const useOrderActions = () => {
  const dispatch = useDispatch();

  return {
    createOrder: (orderData) =>
      dispatch(createOrder(orderData)),

    updateOrder: (orderId, orderData) =>
      dispatch(updateOrder({ orderId, orderData })),

    deleteOrder: (orderId) =>
      dispatch(deleteOrder(orderId)),

    updateOrderStatus: (orderId, statusData) =>
      dispatch(updateOrderStatus({ orderId, statusData })),

    cancelOrder: (orderId) =>
      dispatch(cancelOrder(orderId)),
  };
};

export default useOrderActions;