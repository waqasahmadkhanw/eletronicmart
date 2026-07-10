const NotificationBadge = ({
  count = 0,
  max = 99,
  className = "",
}) => {
  if (count <= 0) return null;

  const displayCount = count > max ? `${max}+` : count;

  return (
    <span
      className={`inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-none text-white ${className}`}
    >
      {displayCount}
    </span>
  );
};

export default NotificationBadge;