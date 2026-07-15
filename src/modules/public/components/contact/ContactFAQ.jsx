// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const faqs = [
//   {
//     id: 1,
//     question: "How long does it take to receive a response?",
//     answer:
//       "Our support team typically responds to all inquiries within 24 hours during business days.",
//   },
//   {
//     id: 2,
//     question: "Can I track my order after purchase?",
//     answer:
//       "Yes. Once your order is shipped, you'll receive a tracking number via email so you can monitor its delivery.",
//   },
//   {
//     id: 3,
//     question: "Do you offer product warranties?",
//     answer:
//       "Yes. Most products include an official manufacturer warranty. Warranty details are available on each product page.",
//   },
//   {
//     id: 4,
//     question: "What payment methods do you accept?",
//     answer:
//       "We support secure online payments, including cards and other supported payment methods available at checkout.",
//   },
//   {
//     id: 5,
//     question: "How can I return or exchange a product?",
//     answer:
//       "You can contact our support team within the eligible return period. We'll guide you through the return or exchange process.",
//   },
// ];

// const ContactFAQ = () => {
//   const [activeId, setActiveId] = useState(1);

//   const toggleFAQ = (id) => {
//     setActiveId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section className="bg-white py-24 dark:bg-slate-950">
//       <div className="container mx-auto max-w-4xl px-4">
//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
//             Frequently Asked Questions
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
//             Need Answers?
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
//             Here are answers to the questions we receive most often. If
//             you still need help, our support team is always available.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-5">
//           {faqs.map(({ id, question, answer }) => {
//             const isOpen = activeId === id;

//             return (
//               <div
//                 key={id}
//                 className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900"
//               >
//                 <button
//                   type="button"
//                   onClick={() => toggleFAQ(id)}
//                   className="flex w-full items-center justify-between px-6 py-5 text-left"
//                 >
//                   <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {question}
//                   </span>

//                   {isOpen ? (
//                     <ChevronUp
//                       size={22}
//                       className="text-blue-600"
//                     />
//                   ) : (
//                     <ChevronDown
//                       size={22}
//                       className="text-gray-500"
//                     />
//                   )}
//                 </button>

//                 {isOpen && (
//                   <div className="border-t border-gray-100 px-6 py-5 dark:border-slate-800">
//                     <p className="leading-8 text-gray-600 dark:text-gray-400">
//                       {answer}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFAQ;
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How long does it take to receive a response?",
    answer: "Our support team typically responds to all inquiries within 24 hours during business days.",
  },
  {
    id: 2,
    question: "Can I track my order after purchase?",
    answer: "Yes. Once your order is shipped, you'll receive a tracking number via email so you can monitor its delivery.",
  },
  {
    id: 3,
    question: "Do you offer product warranties?",
    answer: "Yes. Most products include an official manufacturer warranty. Warranty details are available on each product page.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We support secure online payments, including cards and other supported payment methods available at checkout.",
  },
  {
    id: 5,
    question: "How can I return or exchange a product?",
    answer: "You can contact our support team within 7 days of delivery for returns and exchanges.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === id ? null : id)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-white">
                  {question}
                </span>
                {openId === id ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
                )}
              </button>

              {openId === id && (
                <div className="px-5 pb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;