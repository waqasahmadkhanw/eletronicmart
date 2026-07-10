const WishlistSearch = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="search"
      placeholder="Search wishlist..."
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border px-4 py-3 outline-none focus:border-indigo-600"
    />
  );
};

export default WishlistSearch;