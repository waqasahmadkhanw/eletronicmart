import { SearchX } from "lucide-react";
import Button from "./Button";

const EmptyState = ({
  title = "No Data Found",
  description = "We couldn't find anything matching your request.",
  buttonText,
  onButtonClick,
  icon: Icon = SearchX,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Icon size={40} />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-500">
        {description}
      </p>

      {/* Action */}
      {buttonText && (
        <Button
          className="mt-8"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;