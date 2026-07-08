import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-brown from-blue-50 via-white to-gray-100">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        {/* Left Section */}
        <div className="hidden w-1/2 items-center justify-center bg-blue-600 px-12 text-white lg:flex">
          <div className="max-w-md">
            <Link
              to="/"
              className="mb-8 inline-block text-4xl font-bold"
            >
              EletroMartStore
            </Link>

            <h1 className="mb-4 text-4xl font-bold leading-tight">
              Welcome Back
            </h1>

            <p className="text-lg text-blue-100">
              Securely access your account to manage products, orders,
              wishlist, profile, and much more.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;