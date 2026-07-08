import { CheckCircle2 } from "lucide-react";

const NewsletterSuccess = ({
  title = "Subscription Successful!",
  message = "Thank you for subscribing. You'll now receive our latest updates, exclusive offers, and product launches directly in your inbox.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 px-6 py-10 text-center">
      {/* Success Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2
          size={36}
          className="text-green-600"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Message */}
      <p className="mt-3 max-w-md text-gray-600">
        {message}
      </p>
    </div>
  );
};

export default NewsletterSuccess;