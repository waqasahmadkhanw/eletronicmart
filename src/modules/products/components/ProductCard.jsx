import React from "react";
import ProductStatusBadge from "./ProductStatusBadge";

const ProductCard = ({
  product,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="truncate text-lg font-semibold">
            {product.name}
          </h3>

          <ProductStatusBadge status={product.status} />
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Category:</span>
            <p>{product.category}</p>
          </div>

          <div>
            <span className="font-medium">Brand:</span>
            <p>{product.brand}</p>
          </div>

          <div>
            <span className="font-medium">Price:</span>
            <p className="font-semibold text-green-600">
              ${product.price}
            </p>
          </div>

          <div>
            <span className="font-medium">Stock:</span>
            <p>{product.stock}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onView(product)}
            className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            View
          </button>

          <button
            onClick={() => onEdit(product)}
            className="flex-1 rounded-md bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="flex-1 rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;