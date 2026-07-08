import { AlertTriangle } from "lucide-react";
import Button from "./Button";

const ErrorState = ({
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  buttonText = "Try Again",
  onRetry,
  icon: Icon = AlertTriangle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-red-200 bg-red-50 px-6 py-16 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
        <Icon size={40} />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-600">
        {description}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <Button
          variant="danger"
          className="mt-8"
          onClick={onRetry}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default ErrorState;