import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

const SalesChart = ({ title = "Sales Overview", children }) => {
  return (
    <DashboardCard title={title}>
      <div className="flex h-80 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50">
        {children || (
          <p className="text-sm text-gray-500">
            Sales chart will be displayed here.
          </p>
        )}
      </div>
    </DashboardCard>
  );
};

SalesChart.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SalesChart;