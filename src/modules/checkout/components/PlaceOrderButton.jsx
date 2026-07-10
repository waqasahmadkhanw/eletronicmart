// modules/checkout/components/PlaceOrderButton.jsx

const PlaceOrderButton = ({
  loading = false,
  disabled = false,
}) => {
  return (
    <div className="pt-6">
      <button
        type="submit"
        disabled={loading || disabled}
        className={`w-full rounded-lg px-6 py-4 text-lg font-semibold text-white transition-all duration-200
          ${
            loading || disabled
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
          }`}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default PlaceOrderButton;