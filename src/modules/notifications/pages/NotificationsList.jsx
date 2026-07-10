import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  NotificationFilter,
  NotificationList,
} from "../components";

import {
  useNotifications,
  useNotificationActions,
} from "../hooks";

const NotificationsList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const {
    notifications,
    loading,
    unreadCount,
  } = useNotifications();

  const {
    markAsRead,
    markAllAsRead,
    deleteNotification,
    deleteAll,
  } = useNotificationActions();

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      notification.message
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "read"
        ? notification.isRead
        : !notification.isRead;

    return matchesSearch && matchesFilter;
  });

  const handleViewDetails = (notificationId) => {
    navigate(`/notifications/${notificationId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        Loading notifications...
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="mt-1 text-gray-500">
            {unreadCount} unread notification(s)
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={markAllAsRead}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Mark All Read
          </button>

          <button
            onClick={deleteAll}
            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Delete All
          </button>
        </div>
      </div>

      <NotificationFilter
        search={search}
        filter={filter}
        onSearchChange={setSearch}
        onFilterChange={setFilter}
      />

      <NotificationList
        notifications={filteredNotifications}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
        onViewDetails={handleViewDetails}
      />
    </section>
  );
};

export default NotificationsList;