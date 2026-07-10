import NotificationItem from "./NotificationItem";
import EmptyNotifications from "./EmptyNotifications";

const NotificationList = ({
  notifications = [],
  onMarkAsRead,
  onDelete,
  onViewDetails,
}) => {
  if (!notifications.length) {
    return <EmptyNotifications />;
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification._id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default NotificationList;