import BrandGrid from "./BrandGrid";

const Brands = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Trusted Brands
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Shop by Top Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover premium products from the world's most trusted
            brands.
          </p>
        </div>

        <BrandGrid />
      </div>
    </section>
  );
};

export default Brands;