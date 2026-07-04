// modules/public/pages/About.jsx

import PageHeader from "../components/PageHeader";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Learn more about our company and what makes us different."
      />

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Our Story</h2>

        <p className="mt-6 text-gray-600 leading-8">
          We are passionate about providing high-quality products with an
          exceptional shopping experience. Our goal is to make online shopping
          simple, secure, and enjoyable for every customer.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-2xl font-semibold">Our Mission</h3>

            <p className="mt-4 text-gray-600">
              Deliver quality products, competitive prices, and outstanding
              customer service.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h3 className="text-2xl font-semibold">Our Vision</h3>

            <p className="mt-4 text-gray-600">
              Become the most trusted and customer-focused online marketplace.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Testimonials />
    </main>
  );
};

export default About;