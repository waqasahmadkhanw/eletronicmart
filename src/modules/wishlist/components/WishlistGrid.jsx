import React from "react";
import WishlistItem from "./WishlistItem";

const WishlistGrid = ({
  items = [],
  onRemove,
  onMoveToCart,
  onView,
}) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        sm:gap-6
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
      "
    >
      {items.map((item) => (
        <WishlistItem
          key={item._id || item.id}
          item={item}
          onRemove={onRemove}
          onMoveToCart={onMoveToCart}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default WishlistGrid;