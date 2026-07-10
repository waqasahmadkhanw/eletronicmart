const WishlistActions = ({
  item,
  onRemove,
  onMoveToCart,
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onMoveToCart(item._id)}
        className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
      >
        Move to Cart
      </button>

      <button
        onClick={() => onRemove(item._id)}
        className="rounded-lg border border-red-500 px-4 py-2 text-red-600 transition hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
};

export default WishlistActions;