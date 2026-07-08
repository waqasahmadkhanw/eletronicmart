import React from "react";

const ProductTable = ({
  products = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Image
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Brand
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Stock
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-14 w-14 rounded object-cover"
                />
              </td>

              <td className="px-4 py-3 font-medium">
                {product.name}
              </td>

              <td className="px-4 py-3">
                {product.category}
              </td>

              <td className="px-4 py-3">
                {product.brand}
              </td>

              <td className="px-4 py-3">
                ${product.price}
              </td>

              <td className="px-4 py-3">
                {product.stock}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView(product)}
                    className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(product)}
                    className="rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(product._id)}
                    className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;