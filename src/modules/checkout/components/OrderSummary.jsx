// modules/checkout/components/OrderSummary.jsx

import { useCheckout } from "../hooks";

const OrderSummary = () => {
  const { checkoutSummary } = useCheckout();

  const {
    items = [],
    subtotal = 0,
    shipping = 0,
    tax = 0,
    discount = 0,
    total = 0,
  } = checkoutSummary || {};

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">
        Order Summary
      </h2>

      {/* Products */}
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-medium">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>

              <span className="font-semibold">
                ${item.price}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No items in your order.
          </p>
        )}
      </div>

      {/* Totals */}
      <div className="mt-6 space-y-3 border-t pt-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-t pt-4 text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;