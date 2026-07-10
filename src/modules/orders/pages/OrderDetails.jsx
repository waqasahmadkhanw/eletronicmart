import { Link, useNavigate, useParams } from "react-router-dom";

import {
  OrderCard,
} from "../components";

import {
  useOrderDetails,
  useOrderActions,
} from "../hooks";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const {
    order,
    loading,
    error,
  } = useOrderDetails(orderId);

  const {
    deleteOrder,
  } = useOrderActions();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    await deleteOrder(orderId);

    navigate("/orders");
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">
          <p className="text-center text-gray-500">
            Loading order...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-5xl rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="text-red-600">
            {error}
          </p>
        </div>
      </section>
    );
  }

  if (!order) {
    return (
      <section className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">
          <p className="text-center text-gray-500">
            Order not found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Order Details
            </h1>

            <p className="mt-1 text-gray-500">
              View complete order information.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/orders"
              className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Back
            </Link>

            <button
              onClick={() =>
                navigate(`/orders/${orderId}/edit`)
              }
              className="rounded-lg bg-amber-500 px-5 py-2 font-medium text-white transition hover:bg-amber-600"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Order Card */}
        <OrderCard
          order={order}
          onView={() => {}}
          onEdit={() =>
            navigate(`/orders/${orderId}/edit`)
          }
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default OrderDetails;