// modules/public/pages/Privacy.jsx

import PageHeader from "../components/PageHeader";

const Privacy = () => {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        subtitle="Learn how we collect, use, and protect your personal information."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="mt-3 text-gray-600 leading-7">
            We may collect personal information such as your name, email
            address, phone number, shipping address, and payment details when
            you use our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p className="mt-3 text-gray-600 leading-7">
            Your information is used to process orders, improve our services,
            communicate with you, and provide customer support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="mt-3 text-gray-600 leading-7">
            We use appropriate security measures to protect your personal
            information from unauthorized access, disclosure, or misuse.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="mt-3 text-gray-600 leading-7">
            We use cookies to improve your browsing experience, remember your
            preferences, and analyze website traffic.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-gray-600 leading-7">
            If you have any questions regarding our Privacy Policy, please
            contact our support team.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;