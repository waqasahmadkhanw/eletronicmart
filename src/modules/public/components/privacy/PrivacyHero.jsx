import { Link } from "react-router-dom";
import {
  Home,
  ArrowRight,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

const PrivacyHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="Privacy Policy"
          className="h-full w-full object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
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
            Privacy Policy
          </span>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <ShieldCheck size={16} />
            Your Privacy Matters
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Privacy
            <span className="text-blue-500"> Policy</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            We are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, store,
            and safeguard your data when you use our platform.
          </p>

          {/* Last Updated */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-gray-300">
            <CalendarDays
              size={20}
              className="text-blue-400"
            />

            <span>
              Last Updated:
              <strong className="ml-2 text-white">
                July 2026
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;