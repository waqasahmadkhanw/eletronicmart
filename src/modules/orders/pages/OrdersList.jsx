import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  OrderTable,
  OrderSearch,
  OrderFilter,
} from "../components";

import {
  useOrders,
  useOrderActions,
} from "../hooks";

const OrdersList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    orderStatus: "",
    paymentStatus: "",
    paymentMethod: "",
    sort: "",
  });

  const {
    orders,
    loading,
    error,
    refreshOrders,
  } = useOrders({
    search,
    ...filters,
  });

  const { deleteOrder } = useOrderActions();

  const filteredOrders = useMemo(() => {
    if (!Array.isArray(orders)) return [];

    return [...orders];
  }, [orders]);

  const handleDelete = async (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    await deleteOrder(orderId);
    refreshOrders();
  };

  const handleResetFilters = () => {
    setSearch("");

    setFilters({
      orderStatus: "",
      paymentStatus: "",
      paymentMethod: "",
      sort: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Orders
            </h1>

            <p className="mt-1 text-gray-500">
              Manage customer orders.
            </p>
          </div>

          <Link
            to="/orders/create"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            Create Order
          </Link>
        </div>

        {/* Search */}
        <div className="mb-5">
          <OrderSearch
            value={search}
            onSearch={setSearch}
          />
        </div>

        {/* Filters */}
        <div className="mb-6">
          <OrderFilter
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <p className="text-gray-500">
              Loading orders...
            </p>
          </div>
        ) : (
          <OrderTable
            orders={filteredOrders}
            onView={(order) =>
              navigate(`/orders/${order._id}`)
            }
            onEdit={(order) =>
              navigate(`/orders/${order._id}/edit`)
            }
            onDelete={handleDelete}
          />
        )}
      </div>
    </section>
  );
};

export default OrdersList;