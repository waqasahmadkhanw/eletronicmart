import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-16 text-center shadow-2xl lg:px-16">
          <span className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
            Ready to Shop?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Experience Premium Online Shopping
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Discover thousands of authentic products from trusted brands,
            enjoy secure payments, fast delivery, and exceptional customer
            support—all in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <ShoppingCart size={20} />
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-14 grid gap-6 border-t border-slate-700 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                250K+
              </h3>
              <p className="mt-2 text-gray-400">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                500+
              </h3>
              <p className="mt-2 text-gray-400">
                Trusted Brands
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                24/7
              </h3>
              <p className="mt-2 text-gray-400">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;