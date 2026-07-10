import {
  CartList,
  CartTotals,
  CouponForm,
  EmptyCart,
} from "../components";

import {
  useCart,
  useCartItems,
  useCartActions,
} from "../hooks";

const Cart = () => {
  const {
    totals,
    loading,
  } = useCart();

  const {
    items,
  } = useCartItems();

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
    return <EmptyCart />;
  }

  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Review your cart before proceeding to checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-6 lg:col-span-2">

            <CartList
              items={items}
              loading={loading}
              onIncrease={(id) => {
                const item = items.find(
                  (product) => product._id === id
                );

                if (item) {
                  handleIncrease(item);
                }
              }}
              onDecrease={(id) => {
                const item = items.find(
                  (product) => product._id === id
                );

                if (item) {
                  handleDecrease(item);
                }
              }}
              onRemove={removeItem}
              onSaveForLater={moveToWishlist}
            />

            <CouponForm
              appliedCoupon={totals?.coupon}
            />

          </div>

          {/* Right */}

          <div>

            <CartTotals
              totals={totals}
              loading={loading}
              onCheckout={handleCheckout}
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Cart;