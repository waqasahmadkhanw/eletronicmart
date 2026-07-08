import { useState } from "react";
import {
  Heart,
  Eye,
  ShoppingCart,
  GitCompare,
} from "lucide-react";

const DealActions = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <div className="absolute right-4 top-4 flex translate-x-6 flex-col gap-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      {/* Wishlist */}
      <button
        type="button"
        onClick={() => setIsWishlist(!isWishlist)}
        className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition ${
          isWishlist
            ? "bg-red-500 text-white"
            : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
        }`}
        aria-label="Add to Wishlist"
      >
        <Heart
          size={18}
          fill={isWishlist ? "currentColor" : "none"}
        />
      </button>

      {/* Quick View */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-blue-600 hover:text-white"
        aria-label="Quick View"
      >
        <Eye size={18} />
      </button>

      {/* Compare */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-green-600 hover:text-white"
        aria-label="Compare Product"
      >
        <GitCompare size={18} />
      </button>

      {/* Add to Cart */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
        aria-label="Add to Cart"
      >
        <ShoppingCart size={18} />
      </button>
    </div>
  );
};

export default DealActions;