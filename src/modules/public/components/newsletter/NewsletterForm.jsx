import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail } from "lucide-react";

import { newsletterSchema } from "../../validators";
import { usePublic } from "../../hooks";

const NewsletterForm = () => {
  const {
    subscribeNewsletter,
    loading,
    success,
  } = usePublic();

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await subscribeNewsletter(values);

    if (
      result.meta.requestStatus === "fulfilled"
    ) {
      resetForm();
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-green-50 p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700">
          🎉 Successfully Subscribed!
        </h3>

        <p className="mt-2 text-gray-600">
          Thank you for subscribing to our
          newsletter.
        </p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newsletterSchema}
      onSubmit={handleSubmit}
    >
      <Form className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="h-14 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <ErrorMessage
              name="email"
              component="p"
              className="mt-2 text-sm text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-14 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Subscribing..."
              : "Subscribe"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default NewsletterForm;