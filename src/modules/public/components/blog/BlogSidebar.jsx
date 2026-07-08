import { Link } from "react-router-dom";
import {
  Search,
  Folder,
  Clock3,
  Tag,
  ArrowRight,
} from "lucide-react";

const categories = [
  { name: "Technology", count: 18 },
  { name: "Buying Guides", count: 12 },
  { name: "Reviews", count: 15 },
  { name: "Gaming", count: 9 },
  { name: "Accessories", count: 11 },
];

const recentPosts = [
  {
    id: 1,
    title: "Top 10 Smartphones To Buy In 2026",
    date: "July 05, 2026",
  },
  {
    id: 2,
    title: "Complete Laptop Buying Guide",
    date: "July 02, 2026",
  },
  {
    id: 3,
    title: "Best Wireless Headphones Compared",
    date: "June 28, 2026",
  },
];

const tags = [
  "Smartphones",
  "Laptops",
  "Gaming",
  "Accessories",
  "Reviews",
  "Technology",
  "Buying Guide",
  "Security",
];

const BlogSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
          Search
        </h3>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search articles..."
            className="h-12 w-full rounded-xl border border-gray-300 pl-11 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <Folder size={20} />
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800"
            >
              <span>{category.name}</span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-slate-800">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <Clock3 size={20} />
          Recent Posts
        </h3>

        <div className="space-y-5">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group block"
            >
              <h4 className="font-semibold text-gray-900 transition group-hover:text-blue-600 dark:text-white">
                {post.title}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {post.date}
              </p>

              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Read More
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          <Tag size={20} />
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;