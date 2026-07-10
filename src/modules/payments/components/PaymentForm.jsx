// modules/payments/components/PaymentForm.jsx

import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { paymentSchema } from "../validators";
import PaymentMethodSelector from "./PaymentMethodSelector";

const PaymentForm = ({
  initialValues,
  paymentMethods = [],
  loading = false,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={paymentSchema}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="space-y-6 rounded-xl bg-white p-6 shadow">

          {/* Order ID */}
          <div>
            <label
              htmlFor="orderId"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Order ID
            </label>

            <Field
              id="orderId"
              name="orderId"
              type="text"
              placeholder="Enter Order ID"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <ErrorMessage
              name="orderId"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Customer ID */}
          <div>
            <label
              htmlFor="customerId"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Customer ID
            </label>

            <Field
              id="customerId"
              name="customerId"
              type="text"
              placeholder="Enter Customer ID"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <ErrorMessage
              name="customerId"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Amount
            </label>

            <Field
              id="amount"
              name="amount"
              type="number"
              placeholder="0.00"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <ErrorMessage
              name="amount"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Currency */}
          <div>
            <label
              htmlFor="currency"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Currency
            </label>

            <Field
              as="select"
              id="currency"
              name="currency"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="PKR">PKR</option>
            </Field>

            <ErrorMessage
              name="currency"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Payment Method */}
          <PaymentMethodSelector
            value={values.paymentMethod}
            methods={paymentMethods}
            onChange={(value) =>
              setFieldValue("paymentMethod", value)
            }
          />

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <Field
              as="textarea"
              id="description"
              name="description"
              rows={4}
              placeholder="Payment description..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <ErrorMessage
              name="description"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Save Payment"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

PaymentForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  paymentMethods: PropTypes.array,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;