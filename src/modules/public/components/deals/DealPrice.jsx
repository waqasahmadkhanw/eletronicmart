const DealPrice = ({ price, oldPrice }) => {
  const hasDiscount = oldPrice > price;

  const discount = hasDiscount
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  const savings = hasDiscount ? oldPrice - price : 0;

  return (
    <div className="space-y-3">
      {/* Prices */}
      <div className="flex items-end gap-3">
        <span className="text-4xl font-extrabold text-blue-600">
          ${price.toLocaleString()}
        </span>

        {hasDiscount && (
          <span className="text-xl text-gray-400 line-through">
            ${oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Discount Information */}
      {hasDiscount && (
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            Save {discount}%
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
            You Save ${savings.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
};

export default DealPrice;