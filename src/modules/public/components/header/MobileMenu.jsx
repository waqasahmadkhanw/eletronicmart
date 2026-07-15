import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
];

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-2xl lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <Link
            to="/"
            onClick={onClose}
            className="text-2xl font-bold text-blue-600"
          >
            Electronicmart Store
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-5">
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
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
        <div className="border-t p-5">
          <Link
            to="/login"
            onClick={onClose}
            className="mb-3 block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={onClose}
            className="block rounded-lg border border-blue-600 px-4 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
          >
            Create Account
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;