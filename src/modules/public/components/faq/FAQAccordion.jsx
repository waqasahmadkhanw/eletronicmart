import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    category: "orders",
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive a tracking link via email and SMS. You can also track your order from your account dashboard.",
  },
  {
    id: 2,
    category: "payments",
    question: "Which payment methods do you accept?",
    answer:
      "We accept major credit/debit cards and other secure payment methods available during checkout.",
  },
  {
    id: 3,
    category: "shipping",
    question: "How long does shipping take?",
    answer:
      "Standard delivery usually takes 2–7 business days depending on your location and product availability.",
  },
  {
    id: 4,
    category: "returns",
    question: "Can I return a product?",
    answer:
      "Yes. Eligible products can be returned within the applicable return period if they meet our return policy.",
  },
  {
    id: 5,
    category: "account",
    question: "How do I reset my password?",
    answer:
      "Go to the login page, click 'Forgot Password', and follow the instructions sent to your registered email address.",
  },
  {
    id: 6,
    category: "orders",
    question: "Can I cancel my order?",
    answer:
      "Orders can usually be cancelled before they are shipped. Please contact support as soon as possible.",
  },
];

const FAQAccordion = ({ category = "all", search = "" }) => {
  const [openId, setOpenId] = useState(1);

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        category === "all" || faq.category === category;

      const matchesSearch =
        faq.question
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        faq.answer
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      {filteredFAQs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() =>
                setOpenId(isOpen ? null : faq.id)
              }
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>

              {isOpen ? (
                <ChevronUp
                  size={22}
                  className="text-blue-600"
                />
              ) : (
                <ChevronDown
                  size={22}
                  className="text-gray-500"
                />
              )}
            </button>

            {isOpen && (
              <div className="border-t border-gray-100 px-6 py-5 dark:border-slate-800">
                <p className="leading-8 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {filteredFAQs.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 py-12 text-center dark:border-slate-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            No FAQs Found
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Try another category or search term.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;