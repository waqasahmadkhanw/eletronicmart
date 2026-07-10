import { Formik, Form, Field, ErrorMessage } from "formik";
import { orderSchema } from "../validators";

const OrderForm = ({
  initialValues,
  onSubmit,
  loading = false,
  submitText = "Save Order",
}) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        <Form className="space-y-6">
          {/* Customer Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Customer Information
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Customer Name
                </label>

                <Field
                  name="customerName"
                  type="text"
                  placeholder="Enter customer name"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="customerName"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email
                </label>

                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Phone
                </label>

                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter phone"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="phone"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Payment Method
                </label>

                <Field
                  as="select"
                  name="paymentMethod"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash on Delivery">
                    Cash on Delivery
                  </option>
                  <option value="Stripe">Stripe</option>
                  <option value="Credit Card">
                    Credit Card
                  </option>
                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>
                </Field>

                <ErrorMessage
                  name="paymentMethod"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Shipping Information
            </h2>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Shipping Address
              </label>

              <Field
                as="textarea"
                rows="4"
                name="shippingAddress"
                placeholder="Enter shipping address"
                className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              />

              <ErrorMessage
                name="shippingAddress"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>
          </div>

          {/* Order Status */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Order Details
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Payment Status
                </label>

                <Field
                  as="select"
                  name="paymentStatus"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </Field>

                <ErrorMessage
                  name="paymentStatus"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Order Status
                </label>

                <Field
                  as="select"
                  name="orderStatus"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </Field>

                <ErrorMessage
                  name="orderStatus"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Notes
            </label>

            <Field
              as="textarea"
              rows="4"
              name="notes"
              placeholder="Additional notes..."
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            />

            <ErrorMessage
              name="notes"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="reset"
              className="rounded-lg border border-gray-300 px-6 py-2 hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : submitText}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;