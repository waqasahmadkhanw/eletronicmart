const ContactMap = () => {
  return (
    <section className="bg-gray-50 py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
            Our Location
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            We'd love to meet you in person. Visit our office during
            business hours or reach out online anytime.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl dark:border-slate-800">
          <iframe
            title="ElectroMart Location"
            src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;