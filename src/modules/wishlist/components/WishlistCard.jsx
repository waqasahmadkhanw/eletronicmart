import WishlistActions from "./WishlistActions";

const WishlistCard = ({
  item,
  onRemove,
  onMoveToCart,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <img
        src={item.image}
        alt={item.name}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold">
          {item.name}
        </h3>

        <p className="text-xl font-bold text-indigo-600">
          ${item.price}
        </p>

        <WishlistActions
          item={item}
          onRemove={onRemove}
          onMoveToCart={onMoveToCart}
        />
      </div>
    </div>
  );
};

export default WishlistCard;