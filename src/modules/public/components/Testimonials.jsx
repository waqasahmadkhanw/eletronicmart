// components/Testimonials.jsx

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing products and fast delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Ali",
    review: "Excellent customer service and great quality products.",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    review: "Very smooth shopping experience. Will order again.",
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="mt-3 text-gray-600">
          Trusted by thousands of happy customers.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-600">"{item.review}"</p>

            <h3 className="mt-6 text-lg font-semibold">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;