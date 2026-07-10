import { BellOff } from "lucide-react";

const EmptyNotifications = ({
  title = "No Notifications",
  message = "You're all caught up. New notifications will appear here when they're available.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <BellOff className="h-10 w-10 text-gray-400" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="max-w-md text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
};

export default EmptyNotifications;