export default function AuthHeader({
  title,
  subtitle,
  logo,
  className = "",
}) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      {logo && (
        <div className="mb-4 flex justify-center">
          {typeof logo === "string" ? (
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
          ) : (
            logo
          )}
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}