import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const contactItems = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    value: "+92 300 1234567",
    description: "Mon - Sat, 9:00 AM - 8:00 PM",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    value: "support@electromart.com",
    description: "We'll reply within 24 hours.",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Office",
    value: "Karachi, Pakistan",
    description: "Visit our headquarters anytime.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat",
    description: "09:00 AM - 08:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <div>
      <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-sm">
        Contact Information
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white">
        We'd Love To Hear
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> From You</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-400">
        Whether you have questions about products, orders, returns,
        partnerships, or technical support, our dedicated team is ready
        to help.
      </p>

      <div className="mt-10 space-y-5">
        {contactItems.map(({ id, icon: Icon, title, value, description }) => (
          <div
            key={id}
            className="group flex items-start gap-5 rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white">
              <Icon size={26} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>

              <p className="mt-2 font-medium text-blue-400">
                {value}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Chat Card */}
      <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <MessageSquare size={30} />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Need Instant Help?
            </h3>
            <p className="mt-2 text-blue-100">
              Chat live with our support team for immediate assistance.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg"
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;