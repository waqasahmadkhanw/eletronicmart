import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-brown from-slate-950 via-slate-900 to-blue-950" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute right-0 top-20 h[450px] w[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h[420px] w[420px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded[2rem] border border-white/10 bg-white/5 px-6 py-14 shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-xl sm:px-10 lg:px-20 lg:py-20">
          {/* Decorative Glow */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          {/* Badge */}

          <div className="flex justify-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur">
            Premium Shopping Experience
            </span>
          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experience the Future of
            <span className="block bg-gradient-to-red from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Online Shopping
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-300 sm:text-xl">
            Discover premium products from trusted brands, enjoy
            lightning-fast delivery, secure payments, exclusive
            discounts, and world-class customer support—all in one
            seamless shopping experience.
          </p>

          {/* Buttons */}

          <div className="mt-12  flex flex-col items-center justify-center gap-4 sm:flex-row mb-4">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              <ShoppingCart
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              Shop Now
            </Link>

            <Link
              to="/contact-us"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
            >
              Contact Us  

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Trust Indicators */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {[
              "✔ Secure Payments",
              "✔ Fast Delivery",
              "✔ Easy Returns",
              "✔ Premium Support",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-blue-400">
                250K+
              </h3>

              <p className="mt-2 text-slate-400">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-cyan-400">
                500+
              </h3>

              <p className="mt-2 text-slate-400">
                Trusted Brands
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-indigo-400">
                24/7
              </h3>

              <p className="mt-2 text-slate-400">
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