import React from "react";
import {
  ShoppingCart,
  Trash2,
  ArrowRight,
} from "lucide-react";

const WishlistActions = ({
  item,
  onRemove,
  onMoveToCart,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Move to Cart */}
      <button
        type="button"
        onClick={() => onMoveToCart?.(item?._id)}
        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <ShoppingCart
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span>Move to Cart</span>

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Remove */}
      <button
        type="button"
        onClick={() => onRemove?.(item?._id)}
        className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-all duration-300 hover:border-red-500 hover:bg-red-50 hover:shadow-md"
      >
        <Trash2
          size={18}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span>Remove</span>
      </button>
    </div>
  );
};

export default WishlistActions;