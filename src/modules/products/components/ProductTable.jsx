import React from "react";
import {
  Loader2,
  Package,
  Eye,
  Pencil,
  Trash2,
  Tag,
  Boxes,
  DollarSign,
} from "lucide-react";

import ProductStatusBadge from "./ProductStatusBadge";

const ProductTable = ({
  products = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="rounded-full bg-blue-100 p-4">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-800">
          Loading Products...
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Please wait while we fetch products.
        </p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
        <div className="rounded-full bg-slate-100 p-5">
          <Package className="h-10 w-10 text-slate-400" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-800">
          No Products Found
        </h3>

        <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
          There are currently no products available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            Product Management
          </h2>

          <p className="mt-1 text-sm text-blue-100">
            Manage your complete product inventory
          </p>
        </div>

        <div className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {products.length} Products
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1200px] w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Brand
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id || product.id}
                className="border-b border-slate-100 transition-all duration-300 hover:bg-blue-50/40"
              >
                {/* Product */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        product.image ||
                        product.thumbnail ||
                        "https://placehold.co/80x80?text=Product"
                      }
                      alt={product.name}
                      className="h-16 w-16 rounded-2xl border border-slate-200 object-cover shadow-sm"
                    />

                    <div className="max-w-xs">
                      <h3 className="truncate font-semibold text-slate-800">
                        {product.name}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-medium text-indigo-700">
                    <Tag size={14} />
                    {product.category}
                  </span>
                </td>

                {/* Brand */}
                <td className="px-6 py-5 font-medium text-slate-700">
                  {product.brand}
                </td>

                {/* Price */}
                <td className="px-6 py-5">
                  <span className="flex items-center gap-1 text-lg font-bold text-emerald-600">
                    <DollarSign size={16} />
                    {product.price}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                    <Boxes size={14} />
                    {product.stock}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <ProductStatusBadge
                    status={product.status}
                  />
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onView?.(product)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit?.(product)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete?.(
                          product._id || product.id
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;