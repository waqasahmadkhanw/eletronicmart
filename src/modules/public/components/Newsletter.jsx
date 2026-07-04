// components/Newsletter.jsx

const Newsletter = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl bg-gray-100 px-8 py-12 text-center">
        <h2 className="text-3xl font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-3 text-gray-600">
          Get the latest products, offers, and updates directly in your inbox.
        </p>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;