const PageContainer = ({
  title,
  subtitle,
  actions,
  children,
  className = "",
}) => {
  return (
    <section className={`w-full px-4 py-6 md:px-6 lg:px-8 ${className}`}>
      {(title || subtitle || actions) && (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            {title && (
              <h1 className="text-3xl font-bold text-gray-900">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="mt-2 text-sm text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {actions && (
            <div className="flex items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      )}

      <div className="rounded-xl bg-white p-6 shadow-sm">
        {children}
      </div>
    </section>
  );
};

export default PageContainer;