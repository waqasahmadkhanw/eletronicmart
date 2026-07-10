import { Formik, Form, Field, ErrorMessage } from "formik";

import { couponSchema } from "../validators";
import { useCartActions } from "../hooks";

const CouponForm = ({ appliedCoupon = null }) => {
  const {
    applyCoupon,
    removeCoupon,
    loading,
  } = useCartActions();

  const initialValues = {
    code: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await applyCoupon(values);

    if (!result.error) {
      resetForm();
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Coupon Code
      </h3>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Enter your coupon code to receive available discounts.
      </p>

      {appliedCoupon && (
        <div className="mt-5 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">
              Coupon Applied
            </p>

            <p className="text-sm text-green-600 dark:text-green-300">
              {appliedCoupon}
            </p>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={removeCoupon}
            className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50 dark:border-red-700 dark:hover:bg-red-900/20"
          >
            Remove
          </button>
        </div>
      )}

      {!appliedCoupon && (
        <Formik
          initialValues={initialValues}
          validationSchema={couponSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-6 space-y-5">
            <div>
              <Field
                name="code"
                type="text"
                placeholder="Enter coupon code"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />

              <ErrorMessage
                name="code"
                component="p"
                className="mt-2 text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Applying..." : "Apply Coupon"}
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default CouponForm;