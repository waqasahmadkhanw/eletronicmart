import { useState } from "react";
import {
  Heart,
  Eye,
  ShoppingCart,
  GitCompare,
} from "lucide-react";

const ProductActions = () => {
  const [wishlist, setWishlist] = useState(false);

  return (
    <div className="absolute right-4 top-4 flex translate-x-6 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      {/* Wishlist */}
      <button
        type="button"
        onClick={() => setWishlist(!wishlist)}
        className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition ${
          wishlist
            ? "bg-red-500 text-white"
            : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
        }`}
        aria-label="Wishlist"
      >
        <Heart
          size={18}
          fill={wishlist ? "currentColor" : "none"}
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
        aria-label="Compare"
      >
        <GitCompare size={18} />
      </button>

      {/* Add To Cart */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-blue-600 hover:text-white"
        aria-label="Add To Cart"
      >
        <ShoppingCart size={18} />
      </button>
    </div>
  );
};

export default ProductActions;