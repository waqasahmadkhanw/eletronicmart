import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
        {/* Home */}
        <li>
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames
            .slice(0, index + 1)
            .join("/")}`;

          const isLast =
            index === pathnames.length - 1;

          const label = segment
            .replace(/-/g, " ")
            .replace(
              /\b\w/g,
              (char) => char.toUpperCase()
            );

          return (
            <li
              key={path}
              className="flex items-center gap-2"
            >
              {/* Separator */}

              <svg
                className="h-4 w-4 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              {isLast ? (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  {label}
                </span>
              ) : (
                <Link
                  to={path}
                  className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-600"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;