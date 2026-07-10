const EmptyWishlist = () => {
  return (
    <div className="rounded-xl border border-dashed py-20 text-center">
      <h2 className="text-2xl font-bold">
        Your wishlist is empty
      </h2>

      <p className="mt-2 text-gray-500">
        Save your favorite products here and shop later.
      </p>
    </div>
  );
};

export default EmptyWishlist;