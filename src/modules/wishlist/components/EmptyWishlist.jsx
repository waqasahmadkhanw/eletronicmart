import {
  Heart,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const EmptyWishlist = ({
  onContinueShopping,
}) => {
  return (
    <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-rose-50 p-8 shadow-sm">
      <div className="max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-pink-100 shadow-inner">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
            <Heart
              size={40}
              className="text-rose-500"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Content */}
        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          Your Wishlist is Empty
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-500">
          Looks like you haven't saved any products yet.
          Browse our collection and add your favorite
          items so you can easily find them later.
        </p>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <Heart
              className="mx-auto mb-3 text-rose-500"
              size={24}
            />
            <p className="text-sm font-semibold text-slate-700">
              Save Favorites
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <ShoppingBag
              className="mx-auto mb-3 text-blue-600"
              size={24}
            />
            <p className="text-sm font-semibold text-slate-700">
              Shop Anytime
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <ArrowRight
              className="mx-auto mb-3 text-emerald-600"
              size={24}
            />
            <p className="text-sm font-semibold text-slate-700">
              Quick Checkout
            </p>
          </div>
        </div>

        {/* CTA */}
        {onContinueShopping && (
          <button
            type="button"
            onClick={onContinueShopping}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyWishlist;