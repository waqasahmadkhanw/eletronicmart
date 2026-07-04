import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi"; // npm i react-icons
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

    {/* Logo */}
    <Link to="/" className="flex items-center gap-2 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-brown from-indigo-500 to-blue-600 text-white font-bold shadow-sm">
        E
      </div>
      <span className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
        Electro<span className="text-indigo-600">Mart</span>
      </span>
    </Link>

    {/* Nav - Desktop */}
    <nav className="hidden items-center gap-1 md:flex">
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/contact-us", label: "Contact" },
        { to: "/privacy", label: "Privacy" },
        // { to: "/terms", label: "Terms" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
              ? "text-indigo-600 bg-indigo-50"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>

    {/* Actions */}
    <div className="flex items-center gap-3">
      <Link
        to="/cart"
        className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
      >
        <FiShoppingCart size={20} />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">3</span>
      </Link>

      <Link
        to="/login"
        className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all"
      >
        <FiUser size={16} />
        Login
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100">
        <FiMenu size={20} />
      </button>
    </div>
  </div>
</header>
  );
}