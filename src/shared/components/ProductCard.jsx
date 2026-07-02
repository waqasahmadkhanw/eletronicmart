import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function ProductCard({
  product,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>

        <p className="mt-2 text-blue-600 font-bold">
          ${product.price}
        </p>

        <Link
          to={`/product/${product._id}`}
        >
          <Button className="mt-4 w-full">
            View Details
          </Button>
        </Link>

      </div>
    </div>
  );
}