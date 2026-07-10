import NotificationCard from "./NotificationCard";

const NotificationItem = ({
  notification,
  onMarkAsRead,
  onDelete,
  onViewDetails,
}) => {
  return (
    <NotificationCard
      notification={notification}
      onMarkAsRead={onMarkAsRead}
      onDelete={onDelete}
      onViewDetails={onViewDetails}
    />
  );
};

export default NotificationItem;