// modules/checkout/pages/Payment.jsx

import { useEffect } from "react";
import {
  PaymentMethod,
  OrderSummary,
  CheckoutSteps,
} from "../components";
import { usePayment, useCheckout } from "../hooks";

const Payment = () => {
  const {
    paymentMethods,
    loading,
    error,
    fetchPaymentMethods,
  } = usePayment();

  const { fetchCheckoutSummary } = useCheckout();

  useEffect(() => {
    fetchPaymentMethods();
    fetchCheckoutSummary();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <CheckoutSteps currentStep={2} />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Payment
          </h1>

          <p className="mt-2 text-gray-600">
            Select your preferred payment method and review
            your order before placing it.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <p className="text-gray-600">
              Loading payment information...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PaymentMethod />
            </div>

            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payment;