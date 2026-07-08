import CategoryGrid from "./CategoryGrid";

const Categories = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Categories
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse thousands of premium products from our most popular
            categories.
          </p>
        </div>

        <CategoryGrid />
      </div>
    </section>
  );
};

export default Categories;