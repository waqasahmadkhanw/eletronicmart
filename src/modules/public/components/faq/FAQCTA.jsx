import { Link } from "react-router-dom";
import {
  ArrowRight,
  Headset,
  Mail,
  MessageCircle,
} from "lucide-react";

const FAQCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-10 shadow-2xl md:p-16">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
              <Headset size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">
              Still Need Help?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Can't find the answer you're looking for? Our support team
              is available to help with orders, payments, shipping,
              returns, or any other questions.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <Mail size={20} />
                Contact Support
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <MessageCircle size={20} />
                Live Chat
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-12 grid gap-6 border-t border-slate-700 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  24/7
                </h3>
                <p className="mt-2 text-gray-400">
                  Customer Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  &lt; 24h
                </h3>
                <p className="mt-2 text-gray-400">
                  Average Response
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  99%
                </h3>
                <p className="mt-2 text-gray-400">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQCTA;