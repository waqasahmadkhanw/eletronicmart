// modules/checkout/components/PaymentMethod.jsx

import { Field, ErrorMessage } from "formik";

const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">
        Payment Method
      </h2>

      <div className="space-y-6">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-3">
            Select Payment Method
          </label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <Field
                type="radio"
                name="paymentMethod"
                value="card"
                className="h-4 w-4"
              />
              <span>Credit / Debit Card</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <Field
                type="radio"
                name="paymentMethod"
                value="paypal"
                className="h-4 w-4"
              />
              <span>PayPal</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <Field
                type="radio"
                name="paymentMethod"
                value="cod"
                className="h-4 w-4"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <ErrorMessage
            name="paymentMethod"
            component="p"
            className="mt-2 text-sm text-red-500"
          />
        </div>

        {/* Card Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Card Number
            </label>

            <Field
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ErrorMessage
              name="cardNumber"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Card Holder Name
            </label>

            <Field
              type="text"
              name="cardHolderName"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ErrorMessage
              name="cardHolderName"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Expiry Date
            </label>

            <Field
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ErrorMessage
              name="expiryDate"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              CVV
            </label>

            <Field
              type="password"
              name="cvv"
              placeholder="123"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ErrorMessage
              name="cvv"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;