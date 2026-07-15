import { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Bell,
  Heart,
  Moon,
  ShoppingCart,
  Sun,
  User,
} from "lucide-react";

import { useTheme } from "../../../../shared/hooks/useTheme";

// Prefer importing selectors instead of reading state directly.
// import {
//   selectCurrentUser,
//   selectCartCount,
//   selectWishlistCount,
//   selectUnreadNotifications,
// } from "../../store/selectors";

const CountBadge = ({ count, color = "bg-red-500" }) => {
  if (!count) return null;

  return (
    <span
      className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-white ${color}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
};

const HeaderActions = () => {
  const { theme, toggleTheme } = useTheme();

  // Replace these with selectors when available
  const user = useSelector((state) => state.auth?.user);

  const cartCount =
    useSelector((state) => state.cart?.totalItems) ?? 0;

  const wishlistCount =
    useSelector((state) => state.wishlist?.totalItems) ?? 0;

  const notificationCount =
    useSelector(
      (state) => state.notifications?.unreadCount
    ) ?? 0;

  const displayName =
    user?.firstName ||
    user?.name ||
    "My Account";

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}

      <button
        type="button"
        aria-label="Toggle Theme"
        title="Toggle Theme"
        onClick={toggleTheme}
        className="rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        {theme === "dark" ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>

      {/* Notifications */}

      <Link
        to="/notifications"
        aria-label="Notifications"
        title="Notifications"
        className="relative rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        <Bell size={20} />

        <CountBadge
          count={notificationCount}
          color="bg-red-500"
        />
      </Link>

      {/* Wishlist */}

      <Link
        to="/wishlist"
        aria-label="Wishlist"
        title="Wishlist"
        className="relative rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-red-500 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <Heart size={20} />

        <CountBadge
          count={wishlistCount}
          color="bg-red-500"
        />
      </Link>

      {/* Cart */}

      <Link
        to="/cart"
        aria-label="Shopping Cart"
        title="Shopping Cart"
        className="relative rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        <ShoppingCart size={20} />

        <CountBadge
          count={cartCount}
          color="bg-blue-600"
        />
      </Link>

      {/* Profile */}

      <Link
        to="/profile"
        className="ml-2 flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1 transition-all duration-200 hover:border-blue-600 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <User
            size={18}
            className="text-gray-600 dark:text-gray-300"
          />
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-xs text-gray-500">
            Hello
          </p>

          <p className="text-sm font-semibold text-gray-800 dark:text-white">
            {displayName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default memo(HeaderActions);