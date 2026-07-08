const LoadingLayout = ({
  text = "Loading...",
  fullScreen = true,
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "h-full w-full py-16"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        {/* Loading Text */}
        <p className="text-sm font-medium text-gray-600">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LoadingLayout;