import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Bell } from "lucide-react";

import { useNotificationDetails } from "../hooks";

const NotificationDetails = () => {
  const { notificationId } = useParams();

  const {
    notification,
    loading,
    error,
  } = useNotificationDetails(notificationId);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        Loading notification...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!notification) {
    return (
      <div className="py-20 text-center text-gray-500">
        Notification not found.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <Link
        to="/notifications"
        className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft size={18} />
        Back to Notifications
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-start gap-4">
          <div className="rounded-full bg-blue-100 p-3">
            <Bell className="h-6 w-6 text-blue-600" />
          </div>

          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {notification.title}
              </h1>

              {!notification.isRead && (
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                  New
                </span>
              )}

              {notification.type && (
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {notification.type}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-500">
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-5">
          <p className="whitespace-pre-line leading-7 text-gray-700">
            {notification.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotificationDetails;