import { Link } from "react-router-dom";

export default function CategoryCard({
  category,
}) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="block rounded-xl bg-white p-6 text-center shadow hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        className="mx-auto h-24 w-24 object-contain"
      />

      <h2 className="mt-4 font-semibold">
        {category.name}
      </h2>
    </Link>
  );
}