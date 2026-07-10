import CartItem from "./CartItem";

const CartList = ({
  items = [],
  loading = false,
  onIncrease,
  onDecrease,
  onRemove,
  onSaveForLater,
}) => {
  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="h-32 w-32 rounded-xl bg-gray-200 dark:bg-gray-700" />

              <div className="flex-1 space-y-4">
                <div className="h-6 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />

                <div className="mt-6 flex items-center justify-between">
                  <div className="h-11 w-36 rounded-xl bg-gray-200 dark:bg-gray-700" />
                  <div className="h-11 w-52 rounded-xl bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
          onSaveForLater={onSaveForLater}
        />
      ))}
    </div>
  );
};

export default CartList;