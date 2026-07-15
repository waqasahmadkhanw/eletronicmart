import React from "react";
import WishlistCard from "./WishlistCard";

const WishlistItem = ({
  item,
  onRemove,
  onMoveToCart,
  onView,
}) => {
  if (!item) return null;

  return (
    <WishlistCard
      item={item}
      onRemove={onRemove}
      onMoveToCart={onMoveToCart}
      onView={onView}
    />
  );
};

export default React.memo(WishlistItem);