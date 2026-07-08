import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    label: "My Profile",
    icon: User,
    path: "/profile",
  },
  {
    label: "My Orders",
    icon: ShoppingBag,
    path: "/orders",
  },
  {
    label: "Wishlist",
    icon: Heart,
    path: "/wishlist",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 transition hover:border-blue-600"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <User
            size={20}
            className="text-blue-600"
          />
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-xs text-gray-500">
            Welcome
          </p>

          <p className="text-sm font-semibold text-gray-900">
            John Doe
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border bg-white shadow-xl">
          <div className="border-b px-5 py-4">
            <h3 className="font-semibold text-gray-900">
              John Doe
            </h3>

            <p className="text-sm text-gray-500">
              john@example.com
            </p>
          </div>

          <div className="py-2">
            {menuItems.map(({ label, icon: Icon, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 transition hover:bg-gray-100"
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>

          <div className="border-t p-2">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;