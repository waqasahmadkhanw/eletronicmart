import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/products" },
  { name: "Cart", path: "/cart" },
  { label: "Categories", path: "/categories" },
  { name: "Orders", path: "/orders" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { name: "Contact", path: "/contact-us" },
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Wishlist", path: "/wishlist" },
];

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold text-blue-600">
            MERN Store
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-5">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t p-5">
          <NavLink
            to="/login"
            onClick={onClose}
            className="block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={onClose}
            className="mt-3 block rounded-lg border border-blue-600 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Create Account
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;