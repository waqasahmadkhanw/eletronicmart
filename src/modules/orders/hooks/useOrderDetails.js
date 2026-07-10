import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrderDetails } from "../store";
import {
  selectOrder,
  selectOrderLoading,
  selectOrderError,
} from "../store";

const useOrderDetails = (orderId) => {
  const dispatch = useDispatch();

  const order = useSelector(selectOrder);
  const loading = useSelector(selectOrderLoading);
  const error = useSelector(selectOrderError);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderDetails(orderId));
    }
  }, [dispatch, orderId]);

  return {
    order,
    loading,
    error,
    refreshOrder: () => dispatch(fetchOrderDetails(orderId)),
  };
};

export default useOrderDetails;