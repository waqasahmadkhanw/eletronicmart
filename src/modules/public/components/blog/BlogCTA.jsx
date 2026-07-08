import { Link } from "react-router-dom";
import {
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400">
                <Sparkles size={16} />
                Weekly Insights
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Never Miss Our
                <span className="text-blue-500"> Latest Articles</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Get expert buying guides, technology news, product
                reviews, exclusive offers, and shopping tips delivered
                directly to your inbox.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-blue-400">
                    500+
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Articles Published
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-400">
                    50K+
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Newsletter Readers
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-400">
                    Weekly
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Fresh Content
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">
                Subscribe to Our Newsletter
              </h3>

              <p className="mt-3 text-gray-400">
                Join thousands of readers and receive our newest
                articles, exclusive deals, and product updates.
              </p>

              <form className="mt-8 space-y-5">
                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Subscribe Now
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                No spam. Unsubscribe anytime.
              </p>

              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Need help? Contact our team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;