// components/PromotionalBanner.jsx

const PromotionalBanner = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl bg-blue-600 px-8 py-16 text-center text-white">
        <span className="text-sm font-semibold uppercase tracking-wider">
          Limited Time Offer
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Up to 50% Off Selected Products
        </h2>

        <p className="mt-4 text-blue-100">
          Shop now and enjoy exclusive discounts on your favorite products.
        </p>

        <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default PromotionalBanner;