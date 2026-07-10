import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { OrderForm } from "../components";
import {
  useOrderDetails,
  useOrderActions,
} from "../hooks";

const EditOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const {
    order,
    loading,
    error,
  } = useOrderDetails(orderId);

  const {
    updateOrder,
  } = useOrderActions();

  const handleSubmit = async (
    values,
    { setSubmitting }
  ) => {
    try {
      await updateOrder(orderId, values).unwrap();

      toast.success("Order updated successfully.");

      navigate(`/orders/${orderId}`);
    } catch (error) {
      toast.error(
        error?.message ||
          "Failed to update order."
      );
    } finally {
      setSubmitting(false);
    }
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

  const initialValues = {
    customerName: order.customerName || "",
    email: order.email || "",
    phone: order.phone || "",
    shippingAddress: order.shippingAddress || "",
    paymentMethod: order.paymentMethod || "",
    paymentStatus: order.paymentStatus || "Pending",
    orderStatus: order.orderStatus || "Pending",
    notes: order.notes || "",
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit Order
            </h1>

            <p className="mt-1 text-gray-500">
              Update order information.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
          >
            Back
          </button>
        </div>

        {/* Form */}
        <OrderForm
          initialValues={initialValues}
          submitText="Update Order"
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default EditOrder;