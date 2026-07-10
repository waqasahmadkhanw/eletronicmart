// modules/checkout/pages/Checkout.jsx

import { useEffect } from "react";
import { CheckoutForm, CheckoutSteps } from "../components";
import { useCheckout } from "../hooks";

const Checkout = () => {
  const {
    fetchCheckoutSummary,
    loading,
    error,
  } = useCheckout();

  useEffect(() => {
    fetchCheckoutSummary();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <CheckoutSteps currentStep={3} />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Checkout
          </h1>

          <p className="mt-2 text-gray-600">
            Review your shipping information, payment method,
            and complete your purchase.
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
              Loading checkout...
            </p>
          </div>
        ) : (
          <CheckoutForm />
        )}
      </div>
    </section>
  );
};

export default Checkout;