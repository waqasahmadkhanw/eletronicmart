import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useWishlistItems,
  useWishlistActions,
} from "../hooks";

const WishlistDetails = () => {
  const { id } = useParams();

  const {
    selectedItem,
    getWishlistItem,
  } = useWishlistItems();

  const {
    removeFromWishlist,
    moveToCart,
  } = useWishlistActions();

  useEffect(() => {
    if (id) {
      getWishlistItem(id);
    }
  }, [id]);

  if (!selectedItem) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="w-full rounded-2xl object-cover"
        />

        <div className="space-y-5">
          <h1 className="text-4xl font-bold">
            {selectedItem.name}
          </h1>

          <p className="text-3xl font-bold text-indigo-600">
            ${selectedItem.price}
          </p>

          <p className="text-gray-600">
            {selectedItem.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                moveToCart(selectedItem._id)
              }
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
            >
              Move to Cart
            </button>

            <button
              onClick={() =>
                removeFromWishlist(selectedItem._id)
              }
              className="rounded-lg border border-red-500 px-6 py-3 text-red-600 transition hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistDetails;