import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Thousands of customers trust our platform for premium
            products, secure payments, and exceptional customer service.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;