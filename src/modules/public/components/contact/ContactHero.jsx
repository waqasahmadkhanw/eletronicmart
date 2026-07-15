import { Link } from "react-router-dom";
import { ArrowRight, Home, MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
          alt="Contact Us"
          className="h-full w-full object-cover opacity-15" // opacity 20 se 15 ki
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl" />

      <div className="relative container mx-auto px-4 py-28 lg:py-36">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
          <Home size={16} />
          <Link to="/" className="transition hover:text-blue-400">
            Home
          </Link>
          <ArrowRight size={14} />
          <span className="font-medium text-white">Contact Us</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-sm">
            <MessageCircle size={16} />
            We're Here to Help
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Let's Start a
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Conversation</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Have a question, need support, or want to learn more about
            our products? Our team is always ready to assist you with
            fast, friendly, and professional service.
          </p>

          {/* Quick Highlights - Glass Cards */}
          <div className="mt-10 grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
              <p className="text-sm text-gray-400">Support</p>
              <p className="mt-1 font-semibold text-white">24/7 Available</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
              <p className="text-sm text-gray-400">Response Time</p>
              <p className="mt-1 font-semibold text-white">Within 24 Hours</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
              <p className="text-sm text-gray-400">Customer Rating</p>
              <p className="mt-1 font-semibold text-white">4.9 / 5 ★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;