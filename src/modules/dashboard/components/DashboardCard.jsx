import PropTypes from "prop-types";

const DashboardCard = ({
  title,
  children,
  action,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
          )}

          {action && <div>{action}</div>}
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  action: PropTypes.node,
  className: PropTypes.string,
};

export default DashboardCard;