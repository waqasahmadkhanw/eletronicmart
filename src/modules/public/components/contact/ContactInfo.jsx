import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

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
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
        Contact Information
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
        We'd Love To Hear
        <span className="text-blue-600"> From You</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
        Whether you have questions about products, orders, returns,
        partnerships, or technical support, our dedicated team is ready
        to help.
      </p>

      <div className="mt-10 space-y-5">
        {contactItems.map(({ id, icon: Icon, title, value, description }) => (
          <div
            key={id}
            className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-600/20">
              <Icon size={26} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                {value}
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Chat Card */}
      <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
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
          className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;