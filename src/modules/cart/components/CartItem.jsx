import { FaHeart, FaTrash } from "react-icons/fa";
import { QuantitySelector } from ".";

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  onSaveForLater,
}) => {
  const {
    _id,
    name,
    image,
    price,
    quantity,
    stock,
    sku,
    brand,
  } = item;

  const subtotal = price * quantity;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Product Image */}
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {name}
                </h3>

                {brand && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Brand: {brand}
                  </p>
                )}

                {sku && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    SKU: {sku}
                  </p>
                )}

                <p
                  className={`mt-2 text-sm font-medium ${
                    stock > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-primary-600">
                  ${price.toFixed(2)}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Total:
                </p>

                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <QuantitySelector
              quantity={quantity}
              max={stock}
              onIncrease={() => onIncrease(_id)}
              onDecrease={() => onDecrease(_id)}
            />

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onSaveForLater(_id)}
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <FaHeart className="text-red-500" />
                Save for later
              </button>

              <button
                onClick={() => onRemove(_id)}
                className="flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;