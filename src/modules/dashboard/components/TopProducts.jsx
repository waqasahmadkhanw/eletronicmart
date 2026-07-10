import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

const TopProducts = ({ products = [] }) => {
  return (
    <DashboardCard title="Top Products">
      {products.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-sm text-gray-500">
            No top products available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {product.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  ${product.price}
                </p>

                <p className="text-sm text-gray-500">
                  {product.sales} Sold
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
};

TopProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      sales: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ),
};

export default TopProducts;