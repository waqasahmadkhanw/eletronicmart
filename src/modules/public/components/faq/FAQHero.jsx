import { Link } from "react-router-dom";
import {
  Home,
  ArrowRight,
  CircleHelp,
  Search,
} from "lucide-react";

const FAQHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="FAQ"
          className="h-full w-full object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

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

          <ArrowRight size={14} />

          <span className="font-medium text-white">
            FAQ
          </span>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <CircleHelp size={16} />
            Frequently Asked Questions
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            How Can We
            <span className="text-blue-500"> Help You?</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Find quick answers about orders, shipping, payments,
            returns, warranties, and your account. If you can't find
            what you're looking for, our support team is ready to help.
          </p>

          {/* Search Bar UI */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="h-16 w-full rounded-2xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;