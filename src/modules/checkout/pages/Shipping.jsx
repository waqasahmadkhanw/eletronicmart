// modules/checkout/pages/Shipping.jsx

import { useEffect } from "react";
import { ShippingAddress, CheckoutSteps } from "../components";
import { useShipping } from "../hooks";

const Shipping = () => {
  const {
    shippingAddress,
    loading,
    error,
    fetchAddress,
  } = useShipping();

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <CheckoutSteps currentStep={1} />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shipping Information
          </h1>

          <p className="mt-2 text-gray-600">
            Enter your shipping address to continue to the
            payment step.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            Loading shipping information...
          </div>
        ) : (
          <div className="space-y-6">
            {shippingAddress && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                Shipping address loaded successfully.
              </div>
            )}

            <ShippingAddress />
          </div>
        )}
      </div>
    </section>
  );
};

export default Shipping;