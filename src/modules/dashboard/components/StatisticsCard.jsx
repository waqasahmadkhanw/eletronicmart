import PropTypes from "prop-types";

const StatisticsCard = ({
  title,
  value,
  icon,
  change,
  changeType = "increase",
}) => {
  const changeColor =
    changeType === "increase"
      ? "text-green-600"
      : "text-red-600";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h3>

          {change && (
            <p className={`mt-2 text-sm font-medium ${changeColor}`}>
              {change}
            </p>
          )}
        </div>

        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

StatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  icon: PropTypes.node,
  change: PropTypes.string,
  changeType: PropTypes.oneOf([
    "increase",
    "decrease",
  ]),
};

export default StatisticsCard;