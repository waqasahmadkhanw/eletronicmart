import { Formik, Form, Field, ErrorMessage } from "formik";
import { Send, User, Mail, FileText, MessageSquare } from "lucide-react";

import { contactSchema } from "../../validators";
import { usePublic } from "../../hooks";

const ContactForm = () => {
  const {
    submitContactForm,
    loading,
    success,
    clearSuccess,
  } = usePublic();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await submitContactForm(values);

    if (result.meta.requestStatus === "fulfilled") {
      resetForm();

      setTimeout(() => {
        clearSuccess();
      }, 3000);
    }
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
          Send Message
        </span>

        <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as
          possible.
        </p>
      </div>

      {success && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
          Your message has been sent successfully.
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Field
                name="name"
                type="text"
                placeholder="John Doe"
                className="h-14 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <ErrorMessage
              name="name"
              component="p"
              className="mt-2 text-sm text-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Field
                name="email"
                type="email"
                placeholder="john@example.com"
                className="h-14 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <ErrorMessage
              name="email"
              component="p"
              className="mt-2 text-sm text-red-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>

            <div className="relative">
              <FileText
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Field
                name="subject"
                type="text"
                placeholder="Order Inquiry"
                className="h-14 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <ErrorMessage
              name="subject"
              component="p"
              className="mt-2 text-sm text-red-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-5 text-gray-400"
              />

              <Field
                as="textarea"
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <ErrorMessage
              name="message"
              component="p"
              className="mt-2 text-sm text-red-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />

            {loading ? "Sending..." : "Send Message"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;