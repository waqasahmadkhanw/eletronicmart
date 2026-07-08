import { ShieldCheck } from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
  },
  {
    id: "cookies",
    title: "Cookies",
  },
  {
    id: "sharing-information",
    title: "Sharing Information",
  },
  {
    id: "data-security",
    title: "Data Security",
  },
  {
    id: "your-rights",
    title: "Your Rights",
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

const PrivacySidebar = () => {
  return (
    <div className="sticky top-28 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
          <ShieldCheck size={24} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Contents
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Quick Navigation
          </p>
        </div>
      </div>

      <nav>
        <ul className="space-y-2">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-xl px-4 py-3 text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 rounded-2xl bg-blue-600 p-5 text-white">
        <h4 className="font-semibold">
          Need Help?
        </h4>

        <p className="mt-2 text-sm text-blue-100">
          If you have any questions about our Privacy Policy, our support
          team is always available to assist you.
        </p>
      </div>
    </div>
  );
};

export default PrivacySidebar;