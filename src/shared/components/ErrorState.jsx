import Button from "./ui/Button";

export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="py-16 text-center">

      <h2 className="text-2xl font-bold text-red-600">
        Error
      </h2>

      <p className="mt-2 text-gray-600">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}

    </div>
  );
}