const ContactMap = () => {
  return (
    <section className="relative bg-slate-950 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-sm">
            Our Location
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            We'd love to meet you in person. Visit our office during
            business hours or reach out online anytime.
          </p>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-3xl border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="ElectroMart Location"
              src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h[500px] w-full border-0"
              allowFullScreen
            />
          </div>

          {/* Address Info below map */}
          <div className="mt-4 flex-col items-center justify-between gap-4 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-sm sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">Headquarters</p>
              <p className="font-semibold text-white">Karachi, Sindh, Pakistan</p>
            </div>
            <a
              href="https://maps.google.com/?q=Karachi,Pakistan"
              target="_blank"
              className="rounded-xl bg-gradient-to-red from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;