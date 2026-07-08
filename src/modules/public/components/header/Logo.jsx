import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 select-none"
    >
      {/* Logo Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <ShoppingBag size={24} strokeWidth={2.5} />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-extrabold tracking-tight text-gray-900">
          ELECTROMART
        </span>

        <span className="-mt-1 text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
          STORE
        </span>
      </div>
    </Link>
  );
};

export default Logo;