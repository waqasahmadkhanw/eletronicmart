import WishlistCard from "./WishlistCard";

const WishlistItem = ({ item, onRemove, onMoveToCart }) => {
  return (
    <WishlistCard
      item={item}
      onRemove={onRemove}
      onMoveToCart={onMoveToCart}
    />
  );
};

export default WishlistItem;