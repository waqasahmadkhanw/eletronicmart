// components/WhyChooseUs.jsx

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free delivery on eligible orders.",
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "100% safe and secure payment methods.",
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days.",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our team is always here to help you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="mt-3 text-gray-600">
          We provide the best shopping experience for our customers.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-xl border p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
              ⭐
            </div>

            <h3 className="text-lg font-semibold">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;