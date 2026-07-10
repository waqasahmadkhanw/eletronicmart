import { Link } from "react-router-dom";

const formatCurrency = (amount = 0) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

const CartTotals = ({
  totals = {},
  loading = false,
  onCheckout,
}) => {
  const {
    subtotal = 0,
    discount = 0,
    shipping = 0,
    tax = 0,
    total = 0,
    coupon,
  } = totals;

  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Order Summary
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Review your order before checkout.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Subtotal
          </span>

          <span className="font-semibold text-gray-900 dark:text-white">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Discount
          </span>

          <span className="font-semibold text-green-600">
            - {formatCurrency(discount)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Shipping
          </span>

          <span className="font-semibold text-gray-900 dark:text-white">
            {shipping === 0
              ? "Free"
              : formatCurrency(shipping)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Tax
          </span>

          <span className="font-semibold text-gray-900 dark:text-white">
            {formatCurrency(tax)}
          </span>
        </div>

        {coupon && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Coupon Applied: {coupon}
            </p>
          </div>
        )}

        <div className="border-t border-gray-200 pt-5 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Total
            </span>

            <span className="text-2xl font-bold text-primary-600">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={onCheckout}
        className="mt-8 w-full rounded-xl bg-primary-600 px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>

      <Link
        to="/products"
        className="mt-4 block text-center text-sm font-medium text-primary-600 transition hover:underline"
      >
        Continue Shopping
      </Link>

      <div className="mt-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
          Secure Checkout
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your payment is protected with secure encryption. We support
          multiple payment methods for a safe checkout experience.
        </p>
      </div>
    </aside>
  );
};

export default CartTotals;