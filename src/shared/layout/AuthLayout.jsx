import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row">
        {/* Left Section */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 lg:flex lg:w-1/2">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Decorative Circles */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl" />
          <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-center px-10 py-16 xl:px-20">
            <Link
              to="/"
              className="mb-16 inline-flex w-fit items-center gap-3 text-3xl font-extrabold tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                🛍️
              </div>

              EletroMartStore
            </Link>

            <span className="mb-6 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-100 backdrop-blur-md">
              Premium Shopping Experience
            </span>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white xl:text-6xl">
              Welcome Back
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Securely access your account to manage products, orders,
              wishlist, profile, payments, and enjoy a seamless shopping
              experience from anywhere.
            </p>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">
                  50K+
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white">
                  15K+
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Premium Products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;