import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Bell,
  Moon,
  User,
} from "lucide-react";

const HeaderActions = () => {
  const wishlistCount = 2;
  const cartCount = 4;
  const notificationCount = 3;

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        type="button"
        className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
        aria-label="Toggle Theme"
      >
        <Moon size={20} />
      </button>

      {/* Notifications */}
      <button
        type="button"
        className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
        aria-label="Notifications"
      >
        <Bell size={20} />

        {notificationCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            {notificationCount}
          </span>
        )}
      </button>

      {/* Wishlist */}
      <Link
        to="/wishlist"
        className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
      >
        <Heart size={20} />

        {wishlistCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            {wishlistCount}
          </span>
        )}
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="relative rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
      >
        <ShoppingCart size={20} />

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Profile */}
      <Link
        to="/profile"
        className="ml-2 flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1 transition hover:border-blue-600"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
          <User size={18} />
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-xs text-gray-500">Hello</p>
          <p className="text-sm font-semibold text-gray-800">
            My Account
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HeaderActions;