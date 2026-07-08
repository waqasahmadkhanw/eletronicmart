import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  User,
  ArrowRight,
} from "lucide-react";

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    excerpt,
    image,
    category,
    author,
    date,
    readTime,
  } = blog;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          {excerpt}
        </p>

        {/* Button */}
        <Link
          to={`/blog/${id}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
        >
          Read Article

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;