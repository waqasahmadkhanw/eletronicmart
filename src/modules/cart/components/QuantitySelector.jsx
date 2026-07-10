import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = ({
  quantity = 1,
  min = 1,
  max = 99,
  loading = false,
  onIncrease,
  onDecrease,
}) => {
  const canDecrease = quantity > min && !loading;
  const canIncrease = quantity < max && !loading;

  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={!canDecrease}
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center border-r border-gray-200 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <FaMinus className="text-xs text-gray-700 dark:text-gray-300" />
      </button>

      <div className="flex h-11 min-w-[70px] items-center justify-center px-4">
        <span className="text-base font-semibold text-gray-900 dark:text-white">
          {quantity}
        </span>
      </div>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={!canIncrease}
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center border-l border-gray-200 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <FaPlus className="text-xs text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default QuantitySelector;