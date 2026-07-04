// components/NewArrivals.jsx

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: "$99",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "$79",
  },
  {
    id: 4,
    name: "Laptop Bag",
    price: "$59",
  },
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">New Arrivals</h2>

        <button className="text-blue-600 font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="h-48 rounded-lg bg-gray-200"></div>

            <h3 className="mt-4 text-lg font-semibold">
              {product.name}
            </h3>

            <p className="mt-2 text-xl font-bold text-blue-600">
              {product.price}
            </p>

            <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;