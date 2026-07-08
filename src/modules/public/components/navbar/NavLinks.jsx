import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Shop",
    path: "/products",
    hasMegaMenu: true,
  },
  { label: "Categories", path: "/categories" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {navItems.map((item) => (
        <li
          key={item.label}
          className="group relative"
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-1 py-4 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            {item.label}

            {item.hasMegaMenu && (
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;