

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Shoes" },
  { id: 4, name: "Beauty" },
  { id: 5, name: "Furniture" },
  { id: 6, name: "Sports" },
];

const FeaturedCategories = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">Featured Categories</h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer rounded-xl border p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;