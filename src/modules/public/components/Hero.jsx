// components/Hero.jsx

const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row">
        {/* Content */}
        <div className="max-w-xl">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
            New Collection
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-gray-600">
            Shop the latest products at the best prices with fast delivery and
            secure payments.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;