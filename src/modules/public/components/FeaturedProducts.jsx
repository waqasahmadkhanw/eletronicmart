// components/FeaturedProducts.jsx

const products = [
  { id: 1, name: "Wireless Headphones", price: "$99" },
  { id: 2, name: "Smart Watch", price: "$149" },
  { id: 3, name: "Running Shoes", price: "$79" },
  { id: 4, name: "Laptop Backpack", price: "$49" },
];

const FeaturedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 h-48 rounded-lg bg-gray-200"></div>

            <h3 className="text-lg font-semibold">{product.name}</h3>

            <p className="mt-2 text-blue-600 font-bold">
              {product.price}
            </p>

            <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;