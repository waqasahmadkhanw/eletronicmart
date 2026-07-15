import React from "react";
import {
  Eye,
  Pencil,
  Trash2,
  Tag,
  Package,
  Boxes,
  DollarSign,
} from "lucide-react";

import ProductStatusBadge from "./ProductStatusBadge";

const ProductCard = ({
  product,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={
            product.image ||
            product.thumbnail ||
            "https://placehold.co/600x600?text=Product"
          }
          alt={product.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4">
          <ProductStatusBadge status={product.status} />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Title */}
        <div>
          <h3 className="truncate text-xl font-bold text-slate-800">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {product.description}
          </p>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4">
          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Tag size={14} />
              Category
            </div>

            <p className="truncate font-semibold text-slate-700">
              {product.category}
            </p>
          </div>

          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Package size={14} />
              Brand
            </div>

            <p className="truncate font-semibold text-slate-700">
              {product.brand}
            </p>
          </div>

          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <DollarSign size={14} />
              Price
            </div>

            <p className="text-lg font-bold text-emerald-600">
              ${product.price}
            </p>
          </div>

          <div>
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Boxes size={14} />
              Stock
            </div>

            <p className="font-semibold text-slate-700">
              {product.stock}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => onView?.(product)}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            <Eye size={18} />
            <span className="hidden sm:inline">
              View
            </span>
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(product)}
            className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
          >
            <Pencil size={18} />
            <span className="hidden sm:inline">
              Edit
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              onDelete?.(
                product._id || product.id
              )
            }
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
          >
            <Trash2 size={18} />
            <span className="hidden sm:inline">
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;