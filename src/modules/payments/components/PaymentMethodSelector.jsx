// modules/payments/components/PaymentMethodSelector.jsx

import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

const PaymentMethodSelector = ({
  value,
  methods = [],
  onChange,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor="paymentMethod"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Payment Method
      </label>

      <select
        id="paymentMethod"
        name="paymentMethod"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
      >
        <option value="">Select Payment Method</option>

        {methods.map((method) => (
          <option
            key={method.value || method._id}
            value={method.value || method._id}
          >
            {method.label || method.name}
          </option>
        ))}
      </select>

      <ErrorMessage
        name="paymentMethod"
        component="p"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

PaymentMethodSelector.propTypes = {
  value: PropTypes.string,
  methods: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PaymentMethodSelector;