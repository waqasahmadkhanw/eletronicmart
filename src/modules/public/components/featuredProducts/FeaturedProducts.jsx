import ProductGrid from "./ProductGrid";

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Featured Products
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Trending Products
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Discover our best-selling products selected for quality,
              performance, and customer satisfaction.
            </p>
          </div>

          <button className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            View All Products
          </button>
        </div>

        <ProductGrid />
      </div>
    </section>
  );
};

export default FeaturedProducts;