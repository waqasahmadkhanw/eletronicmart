import clsx from "clsx";

const sizes = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
  xl: "h-16 w-16 border-4",
};

const LoadingSpinner = ({
  size = "md",
  text,
  fullScreen = false,
  className = "",
}) => {
  const spinner = (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
    >
      {/* Spinner */}
      <div
        className={clsx(
          "animate-spin rounded-full border-blue-600 border-t-transparent",
          sizes[size]
        )}
      />

      {/* Loading Text */}
      {text && (
        <p className="text-sm font-medium text-gray-500">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;