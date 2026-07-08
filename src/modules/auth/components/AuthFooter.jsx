import { Link } from "react-router-dom";

export default function AuthFooter({
  text,
  linkText,
  linkTo,
  className = "",
}) {
  return (
    <div className={`mt-6 text-center ${className}`}>
      <p className="text-sm text-gray-600">
        {text}{" "}
        <Link
          to={linkTo}
          className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}