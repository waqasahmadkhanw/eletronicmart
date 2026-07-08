import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-10 shadow-2xl md:p-16">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
              <ShieldCheck size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">
              Questions About Your Privacy?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              We believe in transparency and protecting your personal
              information. If you have any questions about this Privacy
              Policy or how your data is handled, our support team is
              here to help.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <Mail size={20} />
                Contact Support
              </Link>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                Back to Home
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 border-t border-slate-700 pt-8">
              <p className="text-sm text-gray-400">
                We regularly review and update this Privacy Policy to
                reflect changes in our services, technology, and
                applicable laws. Please check this page periodically for
                the latest version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyCTA;