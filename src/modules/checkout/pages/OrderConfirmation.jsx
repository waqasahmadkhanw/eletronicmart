// modules/checkout/pages/OrderConfirmation.jsx

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCheckout } from "../hooks";
import { CheckoutSteps } from "../components";

const OrderConfirmation = () => {
  const { orderId } = useParams();

  const {
    order,
    loading,
    error,
    fetchOrderConfirmation,
  } = useCheckout();

  useEffect(() => {
    if (orderId) {
      fetchOrderConfirmation(orderId);
    }
  }, [orderId]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg font-medium text-gray-600">
          Loading order confirmation...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-lg rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Something went wrong
          </h2>

          <p className="mt-2 text-red-500">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-4xl px-4">
        <CheckoutSteps currentStep={4} />

        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Order Confirmed!
          </h1>

          <p className="mt-3 text-gray-600">
            Thank you for your purchase. Your order has been
            placed successfully.
          </p>

          <div className="mt-8 rounded-lg bg-gray-50 p-6 text-left">
            <div className="flex justify-between py-2">
              <span className="font-medium">Order ID</span>
              <span>{order?._id || orderId}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-medium">Status</span>
              <span>{order?.status || "Pending"}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-medium">Payment</span>
              <span>{order?.paymentMethod || "-"}</span>
            </div>

            <div className="flex justify-between py-2 border-t mt-2 pt-4 text-lg font-bold">
              <span>Total</span>
              <span>${order?.total?.toFixed(2) ?? "0.00"}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/orders"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              View Orders
            </Link>

            <Link
              to="/"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;