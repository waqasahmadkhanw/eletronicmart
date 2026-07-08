const ProductPrice = ({ price, oldPrice }) => {
  const hasDiscount = oldPrice && oldPrice > price;

  const discountPercentage = hasDiscount
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-3">
        {/* Current Price */}
        <span className="text-2xl font-bold text-blue-600">
          ${price.toLocaleString()}
        </span>

        {/* Old Price */}
        {hasDiscount && (
          <span className="text-base text-gray-400 line-through">
            ${oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Discount Badge */}
      {hasDiscount && (
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
          Save {discountPercentage}%
        </span>
      )}
    </div>
  );
};

export default ProductPrice;