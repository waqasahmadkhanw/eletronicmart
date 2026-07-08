import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BrandCard = ({ brand }) => {
  const { id, name, logo, products } = brand;

  return (
    <Link
      to={`/products?brand=${id}`}
      className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
    >
      {/* Logo */}
      <div className="flex h-28 items-center justify-center rounded-2xl bg-gray-50 p-6 transition group-hover:bg-blue-50">
        <img
          src={logo}
          alt={name}
          className="h-14 max-w-[140px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>

      {/* Content */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
          {name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {products} Products
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Explore Brand

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;