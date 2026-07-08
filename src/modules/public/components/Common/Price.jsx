import clsx from "clsx";

const sizes = {
  sm: {
    current: "text-lg",
    old: "text-sm",
    badge: "text-xs px-2 py-1",
  },
  md: {
    current: "text-2xl",
    old: "text-base",
    badge: "text-xs px-3 py-1",
  },
  lg: {
    current: "text-3xl",
    old: "text-lg",
    badge: "text-sm px-3 py-1.5",
  },
};

const Price = ({
  price = 0,
  oldPrice,
  currency = "$",
  size = "md",
  showDiscount = true,
  className = "",
}) => {
  const currentSize = sizes[size];

  const hasDiscount =
    oldPrice && Number(oldPrice) > Number(price);

  const discount = hasDiscount
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-3",
        className
      )}
    >
      {/* Current Price */}
      <span
        className={clsx(
          "font-bold text-blue-600",
          currentSize.current
        )}
      >
        {currency}
        {Number(price).toLocaleString()}
      </span>

      {/* Old Price */}
      {hasDiscount && (
        <span
          className={clsx(
            "text-gray-400 line-through",
            currentSize.old
          )}
        >
          {currency}
          {Number(oldPrice).toLocaleString()}
        </span>
      )}

      {/* Discount Badge */}
      {hasDiscount && showDiscount && (
        <span
          className={clsx(
            "rounded-full bg-red-100 font-semibold text-red-600",
            currentSize.badge
          )}
        >
          -{discount}%
        </span>
      )}
    </div>
  );
};

export default Price;