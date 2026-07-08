import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="breadcrumb"
      className="mb-6 rounded-lg bg-white px-4 py-3 shadow-sm"
    >
      <ol className="flex flex-wrap items-center text-sm text-gray-600">
        <li>
          <Link
            to="/"
            className="font-medium text-blue-600 hover:underline"
          >
            Home
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames
            .slice(0, index + 1)
            .join("/")}`;

          const isLast = index === pathnames.length - 1;

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li
              key={path}
              className="flex items-center"
            >
              <span className="mx-2 text-gray-400">/</span>

              {isLast ? (
                <span className="font-semibold text-gray-900">
                  {label}
                </span>
              ) : (
                <Link
                  to={path}
                  className="hover:text-blue-600 hover:underline"
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