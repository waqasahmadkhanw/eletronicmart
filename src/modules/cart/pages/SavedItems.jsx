import { useEffect } from "react";

import {
  CartList,
  EmptyCart,
} from "../components";

import {
  useCartItems,
  useCartActions,
} from "../hooks";

const SavedItems = () => {
  const {
    savedItems,
  } = useCartItems();

  const {
    loading,
    getSavedItems,
    restoreItem,
    removeSavedItem,
  } = useCartActions();

  useEffect(() => {
    getSavedItems();
  }, []);

  if (!loading && savedItems.length === 0) {
    return (
      <EmptyCart
        title="No Saved Items"
        description="You haven't saved any products for later. Browse our collection and save your favorite items to purchase later."
        buttonText="Browse Products"
        buttonLink="/products"
      />
    );
  }

  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Saved for Later
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Products you've saved for future purchases.
          </p>
        </div>

        {/* Saved Items List */}
        <CartList
          items={savedItems}
          loading={loading}
          onIncrease={(id) => restoreItem(id)}
          onDecrease={() => {}}
          onRemove={removeSavedItem}
          onSaveForLater={() => {}}
        />
      </div>
    </section>
  );
};

export default SavedItems;