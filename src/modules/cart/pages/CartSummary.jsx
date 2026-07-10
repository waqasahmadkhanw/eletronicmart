import { Link } from "react-router-dom";
import { FiArrowLeft, FiCreditCard, FiShoppingBag } from "react-icons/fi";

import { CartList, CartTotals, EmptyCart } from "../components";
import { useCart, useCartItems, useCartActions } from "../hooks";

const CartSummary = () => {
  const { totals, loading } = useCart();

  const { items } = useCartItems();

  const {
    updateQuantity,
    removeItem,
    moveToWishlist,
  } = useCartActions();

  const handleIncrease = (item) => {
    updateQuantity(item._id, {
      quantity: item.quantity + 1,
    });
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) return;

    updateQuantity(item._id, {
      quantity: item.quantity - 1,
    });
  };

  const handleCheckout = () => {
    // TODO:
    // navigate("/checkout")
  };

  if (!loading && items.length === 0) {
    return (
      <EmptyCart
        title="Nothing to Review"
        description="Your cart is empty. Add products before proceeding to checkout."
        buttonText="Continue Shopping"
        buttonLink="/products"
      />
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}
        <Link
          to="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:underline"
        >
          <FiArrowLeft />
          Back to Cart
        </Link>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Order Review
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Review your order before completing payment.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow dark:bg-gray-900">
            <FiShoppingBag className="text-primary-600" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {items.length} Item{items.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Order Items */}
          <div className="space-y-6 lg:col-span-2">
            <CartList
              items={items}
              loading={loading}
              onIncrease={(id) => {
                const item = items.find((p) => p._id === id);

                if (item) {
                  handleIncrease(item);
                }
              }}
              onDecrease={(id) => {
                const item = items.find((p) => p._id === id);

                if (item) {
                  handleDecrease(item);
                }
              }}
              onRemove={removeItem}
              onSaveForLater={moveToWishlist}
            />
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <CartTotals
              totals={totals}
              loading={loading}
              onCheckout={handleCheckout}
            />

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center gap-2">
                <FiCreditCard className="text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Secure Checkout
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>✓ SSL encrypted payment</li>
                <li>✓ Secure payment gateway</li>
                <li>✓ Multiple payment methods</li>
                <li>✓ Easy refund policy</li>
                <li>✓ 24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;