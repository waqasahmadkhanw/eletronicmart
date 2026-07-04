// modules/public/pages/Contact.jsx

import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Send us your questions or feedback."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-600">
              Have a question or need assistance? Our team is always ready to
              help. Reach out to us using the contact details below or send us a
              message through the form.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Main Street, Your City, Your Country
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">
                  support@example.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  +1 (234) 567-890
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;