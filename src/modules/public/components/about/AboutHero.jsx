import { Link } from "react-router-dom";
import { ArrowRight, Home, ShoppingBag } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600"
          alt="About Banner"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative container mx-auto px-4 py-28 lg:py-36">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-300">
          <Home size={16} />

          <Link
            to="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-white">
            About Us
          </span>
        </div>

        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            About ElectroMart
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Premium Shopping
            <br />
            Built Around
            <span className="text-blue-500"> Trust</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            ElectroMart is dedicated to delivering premium electronics,
            secure shopping, fast delivery, competitive pricing, and
            exceptional customer service—all in one modern marketplace.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              <ShoppingBag size={20} />
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;