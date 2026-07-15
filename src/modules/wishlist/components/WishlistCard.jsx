import React from "react";
import {
  Heart,
  Eye,
} from "lucide-react";

import WishlistActions from "./WishlistActions";

const WishlistCard = ({
  item,
  onRemove,
  onMoveToCart,
  onView,
}) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 shadow-md backdrop-blur">
          <Heart
            size={18}
            className="fill-red-500 text-red-500"
          />
        </div>

        {/* Quick View */}
        {onView && (
          <button
            type="button"
            onClick={() => onView(item)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition hover:bg-indigo-600 hover:text-white"
          >
            <Eye size={18} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="line-clamp-2 text-lg font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
            {item.name}
          </h3>

          {item.category && (
            <p className="mt-2 text-sm text-slate-500">
              {item.category}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-extrabold text-indigo-600">
              ${item.price}
            </p>

            {item.oldPrice && (
              <p className="text-sm text-slate-400 line-through">
                ${item.oldPrice}
              </p>
            )}
          </div>

          {item.stock > 0 ? (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              In Stock
            </span>
          ) : (
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Out of Stock
            </span>
          )}
        </div>

        {/* Actions */}
        <WishlistActions
          item={item}
          onRemove={onRemove}
          onMoveToCart={onMoveToCart}
        />
      </div>
    </div>
  );
};

export default WishlistCard;