import { NavLink } from "react-router-dom";
import {
  Home,
  Package,
  Grid2x2,
  ShoppingCart,
  Heart,
  ClipboardList,
  User,
  Bell,
  Search,
  CreditCard,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: Home },
  { label: "Products", path: "/products", icon: Package },
  { label: "Categories", path: "/categories", icon: Grid2x2 },
  { label: "Cart", path: "/cart", icon: ShoppingCart },
  { label: "Wishlist", path: "/wishlist", icon: Heart },
  { label: "Orders", path: "/orders", icon: ClipboardList },
  { label: "Checkout", path: "/checkout", icon: CreditCard },
  { label: "Search", path: "/search", icon: Search },
  { label: "Notifications", path: "/notifications", icon: Bell },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white shadow-sm">
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold text-blue-600">
          MERN Store
        </h2>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MERN Store
      </div>
    </aside>
  );
};

export default Sidebar;