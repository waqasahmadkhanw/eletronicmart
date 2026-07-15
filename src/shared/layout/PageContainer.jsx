const PageContainer = ({
  title,
  subtitle,
  actions,
  children,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-12 ${className}`}
    >
      {/* Page Header */}
      {(title || subtitle || actions) && (
        <div className="mb-10 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            {title && (
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="mt-3 max-w-3xl text-base leading-7 text-gray-400">
                {subtitle}
              </p>
            )}
          </div>

          {actions && (
            <div className="flex flex-wrap items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      )}

      {/* Content Card */}
      <div className="overflow-hidden rounded-3xl border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:p-6 lg:p-8">
        {children}
      </div>
    </section>
  );
};

export default PageContainer;