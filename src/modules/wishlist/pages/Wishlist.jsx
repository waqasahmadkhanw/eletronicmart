import { useMemo, useState } from "react";

import {
  WishlistGrid,
  WishlistSearch,
  EmptyWishlist,
} from "../components";

import {
  useWishlist,
  useWishlistActions,
} from "../hooks";

const Wishlist = () => {
  const [search, setSearch] = useState("");

  const { items, loading, error } = useWishlist();

  const {
    removeFromWishlist,
    moveToCart,
  } = useWishlistActions();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [items, search]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg font-medium">
          Loading wishlist...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">
          My Wishlist
        </h1>

        <div className="w-full md:w-80">
          <WishlistSearch
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>

      {filteredItems.length ? (
        <WishlistGrid
          items={filteredItems}
          onRemove={removeFromWishlist}
          onMoveToCart={moveToCart}
        />
      ) : (
        <EmptyWishlist />
      )}
    </section>
  );
};

export default Wishlist;