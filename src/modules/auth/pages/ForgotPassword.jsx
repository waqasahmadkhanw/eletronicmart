import { Link } from "react-router-dom";

import AuthHeader from "../components/AuthHeader";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import AuthFooter from "../components/AuthFooter";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <AuthHeader
          title="Forgot Password?"
          subtitle="Enter your registered email to receive a password reset link."
        />

        <ForgotPasswordForm />

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            ← Back to Login
          </Link>
        </div>

        <AuthFooter
          text="Don't have an account?"
          linkText="Create Account"
          linkTo="/register"
        />
      </div>
    </div>
  );
}