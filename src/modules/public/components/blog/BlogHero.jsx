import { Link } from "react-router-dom";
import {
  Home,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600"
          alt="Blog"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
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

          <ArrowRight size={14} />

          <span className="font-medium text-white">
            Blog
          </span>
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <BookOpen size={16} />
            Insights & Articles
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Learn.
            <span className="text-blue-500"> Explore.</span>
            <br />
            Stay Updated.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Discover buying guides, technology trends, product reviews,
            shopping tips, and the latest news from our experts.
          </p>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search articles..."
                className="h-16 w-full rounded-2xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;