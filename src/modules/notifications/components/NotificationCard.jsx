import { Bell, Check, Eye, Trash2 } from "lucide-react";

const NotificationCard = ({
  notification,
  onMarkAsRead,
  onDelete,
  onViewDetails,
}) => {
  const {
    _id,
    title,
    message,
    type,
    isRead,
    createdAt,
  } = notification;

  return (
    <div
      className={`rounded-xl border p-4 transition-shadow hover:shadow-md ${
        isRead
          ? "border-gray-200 bg-white"
          : "border-blue-200 bg-blue-50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 gap-3">
          <div className="mt-1 rounded-full bg-blue-100 p-2">
            <Bell size={18} className="text-blue-600" />
          </div>

          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">
                {title}
              </h3>

              {type && (
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {type}
                </span>
              )}

              {!isRead && (
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                  New
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600">
              {message}
            </p>

            <p className="mt-2 text-xs text-gray-400">
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isRead && (
            <button
              type="button"
              onClick={() => onMarkAsRead?.(_id)}
              className="rounded-lg p-2 text-green-600 transition hover:bg-green-100"
              title="Mark as read"
            >
              <Check size={18} />
            </button>
          )}

          <button
            type="button"
            onClick={() => onViewDetails?.(_id)}
            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-100"
            title="View Details"
          >
            <Eye size={18} />
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(_id)}
            className="rounded-lg p-2 text-red-600 transition hover:bg-red-100"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;