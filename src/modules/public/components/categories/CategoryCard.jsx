import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  const { id, name, image, products } = category;

  return (
    <Link
      to={`/products?category=${id}`}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Category Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 backdrop-blur">
          {products} Products
        </span>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Explore Collection
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;