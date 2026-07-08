import { Link } from "react-router-dom";

import CountdownTimer from "./CountdownTimer";
import DealPrice from "./DealPrice";
import DealActions from "./DealActions";

const DealCard = ({ deal }) => {
  const {
    id,
    name,
    image,
    price,
    oldPrice,
    endDate,
  } = deal;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Discount Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
          Deal of the Day
        </div>

        {/* Actions */}
        <DealActions />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <h3 className="line-clamp-2 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
          {name}
        </h3>

        <DealPrice
          price={price}
          oldPrice={oldPrice}
        />

        <CountdownTimer endDate={endDate} />

        <Link
          to={`/products/${id}`}
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View Deal
        </Link>
      </div>
    </article>
  );
};

export default DealCard;