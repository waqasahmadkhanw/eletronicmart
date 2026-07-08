const Footer = () => {
  return (
   <footer className="relative mt-20 bg-gradient-to-brown from-slate-900 to-slate-950 text-slate-300 overflow-hidden">
  {/* subtle glow bg */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
    <div className="grid gap-10 text-center sm:text-left sm:grid-cols-3">
      
      {/* Brand */}
      <div className="sm:col-span-1">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Electro<span className="text-indigo-400">Mart</span>
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Your trusted partner for genuine electronics. Quality products, secure payments, and calm shopping experience.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Trust Signals */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Trust & Support</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Secure Checkout
          </li>
          <li className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            7-Day Returns
          </li>
          <li className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            24/7 Support
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-12 border-t border-slate-800" />

    {/* Bottom bar */}
    <div className="mt-8 flex-col items-center justify-between gap-4 text-sm sm:flex-row">
      <p className="text-slate-500">
        © {new Date().getFullYear()} ElectroMart. All rights reserved.
      </p>
      <p className="text-slate-500">
        Crafted with care by <span className="font-medium text-slate-300">Waqas Ahmad Khan</span>
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;