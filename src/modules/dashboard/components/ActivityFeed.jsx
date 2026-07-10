import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

const ActivityFeed = ({ activities = [] }) => {
  return (
    <DashboardCard title="Recent Activity">
      {activities.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-sm text-gray-500">
            No recent activity found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4"
            >
              <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

              <div className="flex-1 border-b border-gray-100 pb-4 last:border-none last:pb-0">
                <h4 className="font-medium text-gray-900">
                  {activity.title}
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  {activity.description}
                </p>

                <span className="mt-2 block text-xs text-gray-400">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
};

ActivityFeed.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ),
};

export default ActivityFeed;