import { Link } from "react-router-dom";
import ProductActions from "./ProductActions";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    image,
    price,
    oldPrice,
    rating,
    reviews,
    discount,
    isNew,
  } = product;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {discount > 0 && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              -{discount}%
            </span>
          )}

          {isNew && (
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
              NEW
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <ProductActions product={product} />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Category */}
        <span className="text-sm font-medium uppercase tracking-wide text-blue-600">
          {category}
        </span>

        {/* Product Name */}
        <Link
          to={`/products/${id}`}
          className="block"
        >
          <h3 className="line-clamp-2 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <ProductRating
          rating={rating}
          reviews={reviews}
        />

        {/* Price */}
        <ProductPrice
          price={price}
          oldPrice={oldPrice}
        />

        {/* Add To Cart */}
        <button
          type="button"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;