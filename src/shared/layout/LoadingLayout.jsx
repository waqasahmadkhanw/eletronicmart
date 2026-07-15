const LoadingLayout = ({
  text = "Loading...",
  fullScreen = true,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        fullScreen
          ? "min-h-screen bg-gradient-to-brown from-slate-50 via-white to-blue-50"
          : "h-full w-full py-20"
      }`}
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      {/* Loading Card */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/70 bg-white/80 px-8 py-10 shadow-2xl backdrop-blur-xl">
        {/* Spinner */}
        <div className="relative mb-6">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <div className="absolute inset-2 animate-pulse rounded-full bg-blue-100" />
        </div>

        {/* Loading Text */}
        <h3 className="text-lg font-semibold text-gray-900">
          {text}
        </h3>

        <p className="mt-2 text-center text-sm text-gray-500">
          Please wait while we prepare everything for you.
        </p>

        {/* Animated Progress */}
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
        </div>
      </div>
    </div>
  );
};

export default LoadingLayout;