import WishlistItem from "./WishlistItem";

const WishlistGrid = ({
  items,
  onRemove,
  onMoveToCart,
}) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <WishlistItem
          key={item._id}
          item={item}
          onRemove={onRemove}
          onMoveToCart={onMoveToCart}
        />
      ))}
    </div>
  );
};

export default WishlistGrid;