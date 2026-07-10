import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../store";
import {
  selectOrders,
  selectOrderLoading,
  selectOrderError,
} from "../store";

const useOrders = (params) => {
  const dispatch = useDispatch();

  const orders = useSelector(selectOrders);
  const loading = useSelector(selectOrderLoading);
  const error = useSelector(selectOrderError);

  useEffect(() => {
    dispatch(fetchOrders(params));
  }, [dispatch, params]);

  return {
    orders,
    loading,
    error,
    refreshOrders: () => dispatch(fetchOrders(params)),
  };
};

export default useOrders;