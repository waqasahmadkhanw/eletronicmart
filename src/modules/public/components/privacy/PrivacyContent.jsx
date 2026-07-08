const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      "We collect personal information such as your name, email address, phone number, shipping address, billing details, and account credentials when you register or place an order.",
      "We also collect technical information including your IP address, browser type, device information, operating system, and website usage analytics to improve our services.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: [
      "We use your information to process orders, manage your account, provide customer support, send order updates, improve our platform, and personalize your shopping experience.",
      "With your permission, we may also send promotional emails, product recommendations, and special offers.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar technologies to remember your preferences, improve performance, analyze traffic, and enhance user experience.",
      "You can disable cookies through your browser settings, although some website features may not function properly.",
    ],
  },
  {
    id: "sharing-information",
    title: "4. Sharing Your Information",
    content: [
      "We do not sell your personal information.",
      "Your information may be shared only with trusted service providers such as payment processors, shipping partners, analytics providers, and when required by applicable law.",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: [
      "We implement industry-standard security measures including encryption, secure payment gateways, protected servers, and access controls to safeguard your information.",
      "While we take reasonable precautions, no online system can guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Privacy Rights",
    content: [
      "Depending on applicable laws, you may request access to your personal information, correct inaccurate data, delete your account, or withdraw consent for certain processing activities.",
      "To exercise these rights, please contact our support team.",
    ],
  },
  {
    id: "contact-us",
    title: "7. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or how we process your information, please contact our customer support team through the Contact page.",
    ],
  },
];

const PrivacyContent = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-10">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-32 border-b border-gray-200 py-8 last:border-none dark:border-slate-800"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.content.map((paragraph, index) => (
              <p
                key={index}
                className="leading-8 text-gray-600 dark:text-gray-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default PrivacyContent;